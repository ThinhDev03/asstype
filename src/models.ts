import * as Yup from "yup";
export interface IProduct {
    id: number,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: { base_url: string }[],
    brand: { id: number, name: string, slug: string },
    specifications: ISpecification[]
}

interface ISpecification {
    name: string,
    attributes: { code: string, value: string, name: string }[]
}
export const signupChema = Yup.object({
    firstName: Yup.string().required("Error"),
    lastName: Yup.string().required("Error"),
    email: Yup.string().email("Sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "mat khau ko khop"),
})
export type SignupForm = Yup.InferType<typeof signupChema>

export const signinSchema = Yup.object({
    email: Yup.string().email("Sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
})
export type SigninForm = Yup.InferType<typeof signinSchema>
export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type updateForm = Yup.InferType<typeof updateSchema>

export const addSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})
export type addForm = Yup.InferType<typeof addSchema>
