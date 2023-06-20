import { Image, Switch, Space, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export const renderColumnUsers = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    //   render: <div></div>,
  },
  {
    title: "User name",
    dataIndex: "user_name",
    key: "user_name",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Admin",
    dataIndex: "admin",
    key: "admin",
    render: (val: boolean) => {
      return <Switch checked={val} />;
    },
  },
];

export const renderColumnProduct = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Classify",
    dataIndex: "classify",
    key: "classify",
    render: (val: any) => {
      return val.map((v: any) => <p>{v}</p>);
    },
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
    render: (val: any) => {
      return val.map((v: any) => <p>{v}</p>);
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (val: any) => {
      return <p>{val} VNĐ </p>;
    },
  },
  {
    title: "Image",
    dataIndex: "image_url",
    key: "image_url",
    width: 500,
    render: (val: any) => {
      // return val.map((v: any) => (
      //   <Image src={v} style={{ width: "10%", height: "10%" }} />
      // ));
      return (
        <Space size="small" style={{ display: "flex" }}>
          {val.map((v: any) => (
            <Image src={v.url} style={{ width: "100px", height: "100px" }} />
          ))}
        </Space>
      );
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (val: any) => <Input value={val} bordered={false} />, //<Text value={val} bordered={false} autoSize />,
    ellipsis: true,
    width: 200,
  },
  {
    title: "User Group",
    dataIndex: "user_group",
    key: "user_group",
    render: (val: any) => {
      return val.map((v: any) => <p>{v}</p>);
    },
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (val: any) => {
      return <p>{`${new Date(val)}`}</p>;
    },
  },
];
