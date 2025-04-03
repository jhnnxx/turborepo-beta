import {useEffect} from "react";

interface ModalComponentProps {
  data?: any | null
}

export default function ModalComponent({data}: ModalComponentProps) {
  console.log(data)
  useEffect(() => {
    console.log('data',data)
  }, []);
  return (
    <div>modal component</div>
  )
}
