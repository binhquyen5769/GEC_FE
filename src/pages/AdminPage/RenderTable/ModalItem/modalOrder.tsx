import { Form, Modal, Select } from "antd";

import { useEffect } from "react";

const STATUS_OPTIONS = [
  { value: "PENDING", label: "Đang chờ duyệt đơn" },
  { value: "DELIVERING", label: "Đang giao hàng" },
  { value: "SUCCESS", label: "Giao hàng thành công" },
];

const ModalOrder = (props: any) => {
  const { isModalOpen, handleOk, handleCancel, detail } = props;

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const initialValue = {
    status: "",
  };

  useEffect(() => {
    form.setFieldValue("status", detail?.status);
  }, [detail, form]);
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={800}
      centered
      destroyOnClose
    >
      <Form
        {...layout}
        initialValues={initialValue}
        form={form}
        preserve={false}
      >
        <Form.Item name={"status"} label={"Status"}>
          <Select options={STATUS_OPTIONS} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalOrder;
