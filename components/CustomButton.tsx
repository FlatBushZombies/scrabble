"use client";

import React from 'react'

const CustomButton = ({ title }: {title: string}) => {
  return (
    <button className="bg-transparent border-2 border-primary text-primary font-medium py-2 px-6 rounded-md transition duration-300 hover:bg-primary hover:text-white">
      {title}
    </button>
  );
};

export default CustomButton