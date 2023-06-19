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
import ModalItem from "./ModalItem";

const RenderTable = (props: any) => {
  const { selectedItem } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductListStart());
    dispatch(getAllUserStart());
  }, [dispatch]);
  const currentData = useAppSelector(dataProduct);
  const allUser = useAppSelector(userSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailItem, setDetailItem] = useState({});

  const showModal = (val: any) => {
    setIsModalOpen(true);
    setDetailItem(val);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDetailItem({});
  };

  const dataSource: any = currentData || [];

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
      <ModalItem
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        detail={detailItem}
      />
      <Table
        dataSource={selectedItem === "products" ? dataSource : allUser}
        columns={
          selectedItem === "products" ? renderColumnProduct : renderColumnUsers
        }
        onChange={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        scroll={{ y: 480, x: window.innerWidth }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => showModal(record), // click row
          };
        }}
      />
    </div>
  );
};

export default RenderTable;
