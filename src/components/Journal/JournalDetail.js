import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import AuthContext from "../../context/auth-context";
import { HTTP_STATUS } from "../../hooks/useHttp";
import { deleteJournalAction } from "../../store/journal/journal-actions";

import JournalForm from "./JournalForm";
import Modal from "../Modal/Modal";
import Title from "../UI/Typography/Title";
import Textbox from "../UI/TextBox/Textbox";
import Button from "../UI/Button/Button";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function JournalDetail(props) {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  const { journalPostStatus } = useSelector((state) => state.httpUI);

  const onDeleteJournal = () => {
    const confirmation = window.confirm("Are you sure?");

    if (confirmation) {
      dispatch(deleteJournalAction(props.id, token));
    }
  };

  const onEditJournal = () => {
    props.onHide();
    setEditModal(true);
  };

  const isLoading = journalPostStatus === HTTP_STATUS.PENDING;

  return (
    <Modal onClick={props.onHide}>
      <div className="p-2">
        <div className="md:flex justify-between">
          <Title>{props.title}</Title>
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <div>
              <Button onClick={onDeleteJournal}>Delete</Button>
              <Button
                onClick={onEditJournal}
                color="bg-primary hover:text-white"
              >
                Edit
              </Button>
            </div>
          )}
        </div>
        <Textbox>{props.body}</Textbox>
      </div>
      {editModal && (
        <JournalForm
          mode="edit"
          onHide={props.onHide}
          title={props.title}
          body={props.body}
        />
      )}
    </Modal>
  );
}

export default JournalDetail;
