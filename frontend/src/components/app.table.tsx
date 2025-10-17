"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import AppModal from "./create.module";
import { useState } from "react";
import UpdateModal from "./update.mudule";
import Link from "next/link";
import useSWR, { mutate } from "swr";
import { toast } from "react-toastify";

interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    if (confirm(`Do you want delete blog (id = ${id})`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain,*/*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          toast.success("Delete success...");
          setShowModal(false);
          mutate("http://localhost:8000/blogs");
        })
        .catch((error) => {
          console.error("Error creating blog:", error);
          toast.error("An error occurred during creation.");
        });
    }
  };
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
          {blogs?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link href={`/Blog/${item.id}`} className="btn btn-primary">
                    View
                  </Link>

                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => {
                      setBlog(item);
                      setShowUpdateModal(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AppModal showModal={showModal} setShowModal={setShowModal} />
      <UpdateModal
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
};

export default AppTable;
