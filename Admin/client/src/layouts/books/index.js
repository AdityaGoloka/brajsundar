import React, { useEffect, useState } from "react";
import {
  Upload,
  Row,
  Col,
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  Image as AntImage,
} from "antd";
import { EyeOutlined, UploadOutlined } from "@ant-design/icons";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";
import "./index.css";
import { BASEURL, IMG } from "API";
function BooksTable() {
  const [booksData, setBooksData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [file, setFile] = useState();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editFile, setEditFile] = useState();
  const [editUploadedFileName, setEditUploadedFileName] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch(`${BASEURL}/book`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooksData(data);
        setFilteredBooks(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const columns = [
    {
      title: "Book Name",
      dataIndex: "bookName",
      key: "bookName",
    },
    {
      title: "Book Link",
      dataIndex: "bookLink",
      key: "bookLink",
      render: (text) => (
        <Button type="primary" onClick={() => window.open(text, "_blank")}>
          View Book
        </Button>
      ),
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Thumbnail",
      dataIndex: "bookThumbnail",
      key: "bookThumbnail",
      render: (text) => (
        <img src={`${IMG}${text}`} alt="bookThumbnail" style={{ width: "50px", height: "50px" }} />
      ),
    },
    {
      title: "Prebook",
      dataIndex: "preBook",
      key: "preBook",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          {/* <Button
            type="primary"
            style={{ background: "#228B22" }}
            onClick={() => handleView(record)}
          >
            View
          </Button> */}
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button
            type="danger"
            style={{ background: "#D22B2B", color: "white" }}
            onClick={() => handleDelete(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleView = (record) => {
    // Fetch book details by ID
    fetch(`${BASEURL}/book/${record._id}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedBook(data);
        setModalVisible(true);
      })
      .catch((error) => console.error("Error fetching book details: ", error));
  };
  const fileSelected2 = (info) => {
    // console.log(info);
    const fileList = [...info.fileList];
    // console.log(fileList);
    if (fileList.length > 0) {
      const file = fileList[0].originFileObj;
      setFile(file);
      setUploadedFileName(file.name); // Set the uploaded file name
    }
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    setAddModalVisible(false);
    form.resetFields(); // Reset form fields in the "Add New Book" modal
    setFile(null); // Reset the file state
  };
  const handleAddNew = () => {
    form.resetFields(); // Reset form fields`
    setAddModalVisible(true);
  };

  const handleEdit = async (record) => {
    try {
      const response = await axios.get(`${BASEURL}/book/${record.id}`);
      const bookData = response.data;
      console.log(bookData);

      form.setFieldsValue({
        bookName: bookData.bookName,
        bookLink: bookData.bookLink,
        bookDetail: bookData.bookDetail,
        country: bookData.country,
        preBook: bookData.preBook,
        bookThumbnail: bookData.bookThumbnail,
      });

      setFile(bookData.file);
      setSelectedBook(bookData);
      setEditModalVisible(true);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const handleEditModalCancel = () => {
    setEditModalVisible(false);
    form.resetFields(); // Reset form fields in the "Edit Book" modal
    setEditFile(null); // Reset the file state for edit modal
  };
  const fileSelectedForEdit = (info) => {
    const fileList = [...info.fileList];
    if (fileList.length > 0) {
      const file = fileList[0].originFileObj;
      setEditFile(file);
      setEditUploadedFileName(file.name); // Set the uploaded file name for edit modal
    }
  };
  const handleEditFormSubmit = async () => {
    try {
      const validatedValues = await form.validateFields();

      const formData = new FormData();
      formData.append("file", editFile);
      for (const key in validatedValues) {
        if (key !== "file") {
          formData.append(key, validatedValues[key]);
        }
      }

      const response = await axios.put(`${BASEURL}/book/${selectedBook?.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        const data = response.data;
        console.log("Book edited successfully:", data.UpdateBook);
        alert("Book edited successfully:", data.UpdateBook);
        setEditModalVisible(false);
        fetchData();
        form.resetFields(); // Reset the form fields
        setEditFile(null);
        // You may want to update the booksData state with the new data here
      } else {
        console.error("Failed to edit book");
      }
      fetchData();
    } catch (error) {
      console.error("Error editing book:", error);
    }
  };
  const handleDelete = async (record) => {
    try {
      console.log(record?.id);

      const response = await axios.delete(`${BASEURL}/book/${record?.id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);

      if (response.status == 200) {
        alert("Book Deleted Successfully");
      } else {
        throw new Error(`Failed to delete book with ID ${record?.id}`);
      }

      fetchData();
    } catch (error) {
      console.error("Error deleting book: ", error.message);
    }
  };

  const fileSelected = (info) => {
    // console.log(info);
    const fileList = [...info.fileList];
    // console.log(fileList);
    if (fileList.length > 0) {
      const file = fileList[0].originFileObj;
      setFile(file);
      setUploadedFileName(file.name); // Set the uploaded file name
    }
  };

  const handleFormSubmit = async () => {
    try {
      const validatedValues = await form.validateFields();

      const formData = new FormData();
      formData.append("file", file);

      for (const key in validatedValues) {
        if (key !== "file") {
          formData.append(key, validatedValues[key]);
        }
      }
      console.log(formData);
      const response = await axios.post(`${BASEURL}/book`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        const data = response.data;
        console.log("Book added successfully:", data);
        alert("Book Added Successfully");
        setAddModalVisible(false);
        fetchData();
        form.resetFields(); // Reset the form fields
        setFile(null);
      } else {
        console.error("Failed to add book");
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    const filtered = booksData.filter((book) =>
      book.bookName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <Input
          placeholder="Search Book by name"
          value={searchInput}
          onChange={handleSearchInputChange}
          style={{ marginBottom: 16 }}
        />
        <Button type="primary" onClick={handleAddNew} style={{ float: "right", margin: "10px" }}>
          Add New
        </Button>
        <Table style={{ overflowX: "auto" }} dataSource={filteredBooks} columns={columns} />
        <Modal
          title={selectedBook ? selectedBook.bookName : "Book Details"}
          visible={modalVisible}
          onCancel={handleModalCancel}
          footer={null}
          className="book-details-modal"
        >
          {selectedBook && (
            <div className="book-details-container">
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <div>
                    <h3 className="book-details-title">Book :</h3>
                    <Button
                      className="view-button"
                      type="primary"
                      icon={<EyeOutlined />}
                      onClick={() => window.open(selectedBook.bookLink, "_blank")}
                    >
                      View Book
                    </Button>
                  </div>
                </Col>
                <Col xs={24} sm={12}>
                  <div>
                    <h3 className="book-details-title">Country:</h3>
                    <p className="book-details-text">{selectedBook.country}</p>
                  </div>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <div>
                    <h3 className="book-details-title">Prebook:</h3>
                    <p className="book-details-text">{selectedBook.prebook}</p>
                  </div>
                </Col>
                <Col xs={24} sm={12}>
                  <div className="thumbnail-container">
                    <h3 className="book-details-title">Thumbnail:</h3>
                    <img
                      className="thumbnail-image"
                      src={selectedBook.bookThumbnail}
                      alt="Thumbnail"
                    />
                  </div>
                </Col>
              </Row>
              <div>
                <h2 className="book-details-title">Book Detail:</h2>
                <p className="book-details-text">{selectedBook.detail}</p>
              </div>
            </div>
          )}
        </Modal>

        {/* Main Book Modal */}

        <Modal
          title={selectedBook ? selectedBook.bookName : "Add New Book"}
          visible={addModalVisible}
          onCancel={handleModalCancel}
          footer={null}
        >
          <Form form={form}>
            <Form.Item label="Book Name" name="bookName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Book Link" name="bookLink" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Book Detail" name="bookDetail" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Country" name="country" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Prebook" name="preBook" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Book Thumbnail Image"
              name="bookThumbnail"
              rules={[
                {
                  required: true,
                  message: "Please enter the book thumbnail image",
                },
              ]}
            >
              <Upload onChange={fileSelected} showUploadList={false}>
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
              {file && <div style={{ color: "green" }}>Uploaded File: {uploadedFileName}</div>}
            </Form.Item>
            <Button onClick={handleFormSubmit} type="primary" htmlType="submit">
              Add Book
            </Button>
          </Form>
        </Modal>

        {/* Edit Modal  */}
        <Modal
          title={selectedBook ? selectedBook.bookName : "Edit Book"}
          open={editModalVisible}
          onCancel={handleEditModalCancel}
          footer={null}
        >
          <Form form={form}>
            <Form.Item label="Book Name" name="bookName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Book Link" name="bookLink" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Book Detail" name="bookDetail" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Country" name="country" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Prebook" name="preBook">
              <Input />
            </Form.Item>
            <Form.Item
              label="Book Thumbnail Image"
              name="bookThumbnail"
              rules={[
                {
                  required: false,
                  message: "Please enter the book thumbnail image",
                },
              ]}
            >
              <Upload onChange={fileSelectedForEdit} showUploadList={false}>
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
              {editFile ? (
                <div style={{ color: "green" }}>Uploaded File: {editUploadedFileName}</div>
              ) : (
                ""
              )}
            </Form.Item>
            <Button onClick={handleEditFormSubmit} type="primary" htmlType="submit">
              Edit Book
            </Button>
          </Form>
        </Modal>
      </div>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default BooksTable;
