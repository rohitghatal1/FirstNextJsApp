"use client";
import { Input } from "antd";
import { useState, useRef } from "react";

type OTPInputProps = {
  length: number;
  onChange: (otp: string) => void;
};

const OTPBox = ({ length, onChange }: OTPInputProps) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;

    const otpValues = [...otp];
    otpValues[index] = value;
    setOtp(otpValues);
    onChange(otpValues.join(""));

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      event.preventDefault();

      setOtp((prevOtp) => {
        const otpValues = [...prevOtp];
        otpValues[index] = "";

        onChange(otpValues.join(""));

        if (!inputsRef.current[index]?.value && index > 0) {
          inputsRef.current[index - 1]?.focus();
        }

        return otpValues;
      });
    }
  };

  return (
    <div>
      <h3 className="py-2 text-lg">
        Please Enter the OTP sent to your number!
      </h3>
      <div className="flex items-center justify-center gap-2 mt-4">
        {Array.from({ length }).map((_, index) => (
          <Input
            key={index}
            maxLength={1}
            size="large"
            ref={(el) => (inputsRef.current[index] = el as any)}
            value={otp[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{ width: "3rem", textAlign: "center" }}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPBox;
