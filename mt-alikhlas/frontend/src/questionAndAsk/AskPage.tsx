import React from 'react';
import { Page } from './Page';
import { Form, required, minLength, Values } from './Form';
import { Field } from './Field';
import { postQuestion } from './QuestionsData';

interface Props {}

export const AskPage = () => {
   const handleSubmit = async (values: Values) => {
      const question = await postQuestion({
         title: values.title,
         content: values.content,
         userName: 'Fred',
         created: new Date(),
      });
      return { success: question ? true : false };
   };
   return (
      <Page title="Bertanya">
         <Form
            submitCaption="Submit Pertanyaan"
            validationRules={{
               title: [
                  { validator: required },
                  { validator: minLength, arg: 10 },
               ],
               content: [
                  { validator: required },
                  { validator: minLength, arg: 50 },
               ],
            }}
            onSubmit={handleSubmit}
            failureMessage="Ada masalah dengan pertnyaan anda"
            successMessage="Pertannyaan Anda telah berhasil di Input
            Klik 'KEMBALI' untuk ke halaman sebelumnya"
         >
            <Field name="title" label="Judul" />
            <Field name="content" label="Isi Pertanyaan" type="TextArea" />
         </Form>
      </Page>
   );
};
