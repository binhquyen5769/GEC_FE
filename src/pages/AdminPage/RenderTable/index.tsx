import { Table, Image, Button, Modal } from "antd";
import {
  dataProduct,
  fetchProductListStart,
} from "../../../store/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { useEffect, useState } from "react";
import { isArray } from "lodash";
import { getAllUserStart, userSelector } from "../../../store/auth/authSlice";
import { renderColumnUsers, renderColumnProduct } from "./renderColumn";

const RenderTable = (props: any) => {
  const { selectedItem } = props;
  console.log("selectedItem", selectedItem);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductListStart());
    dispatch(getAllUserStart());
  }, [dispatch]);
  const currentData = useAppSelector(dataProduct);
  const allUser = useAppSelector(userSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataSource: any = currentData || [];

  // const renderColumns = (data: any) => {
  //   return (
  //     data &&
  //     Object.keys(data).map((k: any) =>
  //       !["properties", "id", "createdAt"].includes(k)
  //         ? {
  //             title: k.toUpperCase(),
  //             dataIndex: k,
  //             key: k,
  //             render:
  //               k === "image_url"
  //                 ? (_: any, { image_url }: any) => {
  //                     return <Image src={image_url[0]} />;
  //                   }
  //                 : (_: any, data: any) => {
  //                     const renderItem = (val: any) => <p>{val}</p>;
  //                     return isArray(data[k])
  //                       ? data[k].map((item: any) => renderItem(item))
  //                       : renderItem(data[k]);
  //                   },
  //           }
  //         : {}
  //     )
  //   );
  // };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Button
        style={{
          marginBottom: "10px",
        }}
        onClick={showModal}
      >
        + Add Item
      </Button>
      <Modal
        title="Add new Item"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Table
        dataSource={selectedItem === "products" ? dataSource : allUser}
        columns={
          selectedItem === "products" ? renderColumnProduct : renderColumnUsers
        }
        onChange={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        scroll={{ y: 480, x: window.innerWidth }}
        // onRow={(record, rowIndex) => {
        //   console.log("record", record);
        //   return {
        //     onClick: (event) => showModal(), // click row
        //     onDoubleClick: (event) => {}, // double click row
        //     onContextMenu: (event) => {}, // right button click row
        //     onMouseEnter: (event) => {}, // mouse enter row
        //     onMouseLeave: (event) => {}, // mouse leave row
        //   };
        // }}
      />
    </div>
  );
};

export default RenderTable;
