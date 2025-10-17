"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";
const ViewDetailBlog = () => {
  const params = useParams<{ tag: string; id: string }>();
  const router = useRouter();
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Chi tiết Blog Post</h1>
      <Button type="button" onClick={() => router.push("/Blog")}>
        Blog
      </Button>
      <div className="mt-3">
        <Card className="text-center">
          <Card.Header>{data?.title}</Card.Header>
          <Card.Body>
            <Card.Title>{data?.author}</Card.Title>
            <Card.Text>{data?.content}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ViewDetailBlog;
