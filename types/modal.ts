import { Developer, Publisher } from "./detail";
import { ReactNode } from "react";

export type modalType = "developer" | "publisher";
export type modalDataType = Developer | Publisher;

export interface modalProps {
  modalControl: modalControlType;
  type: modalType;
  data: modalDataType;
}

export type modalControlType = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export type modalContentType = {
  [x: string]: {
    title: string;
    content: ReactNode;
  };
};