import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { getUserWallet, updateUserWallet } from "../actions/wallet";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const UserWallet = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const [transactionValue, setTransactionValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const form = useRef();
  const checkBtn = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWallet(currentUser.userId));
  });

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const handleInputChange = (e) => {
    const transactionValue = e.target.value;
    setTransactionValue(transactionValue);
  };

  const handleTransaction = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(updateUserWallet(currentUser.userId, transactionValue))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
          setLoading(false);
        });
    } else {
      setSuccessful(false);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong>'s wallet
        </h3>
      </header>
      <p>
        <strong>Wallet Value:</strong> {currentUser.value}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.userId}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <Form onSubmit={handleTransaction} ref={form}>
        <div className="form-group">
          <label htmlFor="transactionValue">Transaction Amount</label>
          <Input
            type="number"
            className="form-control"
            name="transactionValue"
            value={transactionValue}
            onChange={handleInputChange}
            validations={[required]}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-success btn-block mt-2" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Submit Transaction</span>
          </button>
        </div>

        {successful && message && (
          <div className="form-group mt-2">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default UserWallet;
