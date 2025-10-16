"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import AppModal from "./create.module";
import { useState } from "react";

interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table blog</h3>
        <Button variant="secondary" onClick={() => setShowModal(true)}>
          Add new
        </Button>
      </div>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Button>View</Button>

                  <Button variant="warning" className="mx-3">
                    Edit
                  </Button>
                  <Button variant="danger">Edit</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AppModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AppTable;
