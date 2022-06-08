import React from "react";

import { Wrapper, Left, Right, Input, Form,Button,Textarea } from "./GetInTouchElements";
import { useForm } from "react-hook-form";
import Map from "../Map/Map";



export const GetInTouch = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  
  return (
    <div>
      <h1>Get In Touch</h1>
      <Wrapper>
        <Left>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <Input placeholder="Name" {...register("example")} />
            <Input placeholder="Email" {...register("example")} />
            <Input placeholder="Subject" {...register("example")} />
            <Textarea placeholder="Message" type="text" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            {/* <input {...register("exampleRequired", { required: true })} /> */}
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <Button type="submit" />
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Wrapper>
    </div>
  );
};
