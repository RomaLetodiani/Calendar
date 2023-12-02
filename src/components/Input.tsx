import { Button, Modal, Space, Input } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Form } from 'antd';

type Props = {
  year: number;
  month: number;
  day: number;
  setDate: (date: Date) => void;
};

type EditedDate = {
  year: number;
  month: number;
  day: number;
};

const InputDiv = ({ year, month, day, setDate }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editedDate, setEditedDate] = useState<EditedDate>({
    year,
    month: month + 1,
    day,
  });
  const [form] = Form.useForm();
  const handleModalClose = () => {
    setModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = () => {
    setDate(new Date(editedDate.year, editedDate.month - 1, editedDate.day));
    setModalVisible(false);
    form.resetFields();
  };
  return (
    <Space>
      <Button
        style={{
          width: '150px',
          height: '40px',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onClick={() => setModalVisible(true)}
      >
        <span style={{ width: '12ch' }}>
          {`${day < 10 ? `0${day}` : day}/${
            month < 10 ? `0${month + 1}` : month + 1
          }/${year} `}
        </span>
        <CalendarOutlined />
      </Button>
      <Modal
        onCancel={handleModalClose}
        open={modalVisible}
        title="Set Date"
        footer={null}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Year"
            name="year"
            rules={[
              {
                validator: (_, value) => {
                  if (value < 1900 || value > 2100) {
                    return Promise.reject('Year must be between 1900 and 2100');
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              min={1900}
              max={2100}
              type="number"
              value={editedDate.year}
              onChange={(e) => {
                setEditedDate({
                  ...editedDate,
                  year: Number(e.target.value),
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Month"
            name="month"
            rules={[
              {
                validator: (_, value) => {
                  if (value < 1 || value > 12) {
                    return Promise.reject('Month must be between 1 and 12');
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              min={1}
              max={12}
              type="number"
              value={editedDate.month}
              onChange={(e) => {
                setEditedDate({
                  ...editedDate,
                  month: Number(e.target.value),
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Day"
            name="day"
            rules={[
              {
                validator: (_, value) => {
                  if (value < 1 || value > 31) {
                    return Promise.reject('Day must be between 1 and 31');
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              min={1}
              max={31}
              type="number"
              value={editedDate.day}
              onChange={(e) => {
                setEditedDate({
                  ...editedDate,
                  day: Number(e.target.value),
                });
              }}
            />
          </Form.Item>
          <Button onClick={handleSubmit}>Set Date</Button>
        </Form>
      </Modal>
    </Space>
  );
};

export default InputDiv;
