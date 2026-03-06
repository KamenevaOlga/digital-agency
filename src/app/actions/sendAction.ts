"use server";
import { Credentials, FormState } from "@/lib/types";

export const sendAction = async (
  initialState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const fullname = formData.get("fullname")?.toString();
  const email = formData.get("email")?.toString();
  const yourmessage = formData.get("yourmessage")?.toString();

  const errors: Credentials = {};

  if (!fullname) errors.fullname = "fullname обязателен для заполнения";
  if (!email) errors.email = "email обязателен для заполнения";
  if (!yourmessage)
    errors.yourmessage = "yourmessage обязательно для заполнения";

  // --------- Проверка кол-ва ошибок----------
  // если внутри объекта errors мы получаем массив ключей длина кот > 0, то значит что хотя бы одна ошибка там есть
  if (Object.keys(errors).length > 0) {
    return {
      errors,
      values: { fullname, email, yourmessage },
      message: "Возникла ошибка!",
      success: false,
    };
  }

  // Если нет ошибок — отправляем сообщение об успехе
  try {
    console.log("Данные формы:", { fullname, email, yourmessage });

    return {
      errors: {},
      values: { fullname, email, yourmessage },
      message: "Форма успешно отправлена!",
      success: true,
    };
  } catch (error) {
    console.error("Ошибка отправки формы:", error);
    return {
      errors: {},
      values: { fullname, email, yourmessage },
      message: "Произошла ошибка при отправке формы",
      success: false,
    };
  }
};
