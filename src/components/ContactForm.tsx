import { Form, Input } from "antd";
import * as Yup from "yup";
import { sendCallbackRequest } from "../reques/request";
import { CustomButton, CustomForm } from "./styles/StyledComponents";
import { useFormik, type FormikProps, type FormikValues } from "formik";
import type { FormProps } from "antd/es/form";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface FormikAntdFormProps<T extends FormikValues> extends FormProps {
  formik: FormikProps<T>;
  children: ReactNode;
}
const { TextArea } = Input;

const FormikAntdForm = <T extends FormikValues>({
  formik,
  children,
  ...props
}: FormikAntdFormProps<T>) => {
  return (
    <CustomForm
      {...props}
      onFinish={formik.handleSubmit}
      onValuesChange={(_, values) => {
        formik.setValues(values);
      }}
      onFieldsChange={() => {
        formik.setTouched({
          ...formik.touched,
          ...Object.fromEntries(
            Object.keys(formik.values).map((key) => [key, true])
          ),
        });
      }}
    >
      {children}
    </CustomForm>
  );
};
interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Имя должно содержать минимум 2 символа")
      .max(50, "Имя не должно превышать 50 символов")
      .required("Обязательное поле"),
    email: Yup.string()
      .email("Введите корректный email")
      .required("Обязательное поле"),
    message: Yup.string()
      .min(10, "Сообщение должно содержать минимум 10 символов")
      .required("Обязательное поле"),
  });

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      sendCallbackRequest(values.name)
        .then((data) => {
          navigate("/result", { state: data });
        })
        .catch((error) => console.error("Final error:", error));
      setSubmitting(false);
    },
  });

  return (
    <FormikAntdForm formik={formik} layout="vertical">
      <Form.Item
        label="Имя"
        validateStatus={
          formik.touched.name && formik.errors.name ? "error" : ""
        }
        help={formik.touched.name && formik.errors.name}
      >
        <Input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        validateStatus={
          formik.touched.email && formik.errors.email ? "error" : ""
        }
        help={formik.touched.email && formik.errors.email}
      >
        <Input
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Сообщение"
        validateStatus={
          formik.touched.message && formik.errors.message ? "error" : ""
        }
        help={formik.touched.message && formik.errors.message}
      >
        <TextArea
          name="message"
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item>
        <CustomButton
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          Отправить
        </CustomButton>
      </Form.Item>
    </FormikAntdForm>
  );
};

export default ContactForm;
