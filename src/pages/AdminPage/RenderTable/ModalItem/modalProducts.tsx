import { Form, Input, InputNumber, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";
import ListColorPicker from "./colorPicker";

const ModalItem = (props: any) => {
  const { isModalOpen, handleOk, handleCancel, detail } = props;

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const initialValue = {
    name: "",
    description: "",
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
    form.setFieldValue("name", detail?.name || "");
    form.setFieldValue("description", detail?.description || "");
    form.setFieldValue("price", detail?.price || 0);
    form.setFieldValue("color", detail?.color || []);
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
        <Form.Item name={"name"} label={"Name"}>
          <Input />
        </Form.Item>
        <Form.Item name={"description"} label={"Description"}>
          <TextArea />
        </Form.Item>
        <Form.Item name={"image_url"} label={"Image"}>
          <Upload fileList={detail.image_url} listType="picture-card">
            {uploadButton}
          </Upload>
        </Form.Item>
        <Form.Item name={"price"} label={"Price"}>
          <InputNumber addonAfter={"VND"} />
        </Form.Item>
        <Form.Item name={"color"} label={"Color"}>
          <ListColorPicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalItem;
