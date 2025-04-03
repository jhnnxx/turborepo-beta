import {Children, ReactNode, useState} from "react";

interface TabProps {
  className: string
  children: ReactNode[]
  currentTab: number;
  setCurrentTab: (index: number) => void;
}

function Tab1() {
  return (
    <div>tab1</div>
  )
}

function Tab2() {
  return (
    <div>tab2</div>
  )
}

function TabSelector(props: any) {
  const {className, children, currentTab, setCurrentTab} = props as TabProps

  return (
    <div className={`${className} flex justify-between`}>
      {children.map((child: any, index: number) => {
        return (
          <div
            key={index}
            className={`${currentTab === index ? 'border-b-[3px] border-b-[#2DBAE4] font-bold' : 'border-b-[1px] border-b-[#D8D8D9] text-gray-500'} py-[18px] w-full text-center cursor-pointer`}
            onClick={() => setCurrentTab(index)}
          >
            {child?.props?.children}
          </div>
        )
      })}
    </div>
  )
}

function TabContainer(props: any) {
  const {className, children, currentTab} = props as TabProps
  return (
    <div className={`${className}`}>
      {Children.map(children, (child, index) => {
        return (
          <div key={index} className={`${currentTab === index ? 'visible' : 'hidden'}`}>
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default function Tab() {
  const [currentTab, setCurrentTab] = useState(0)
  return (
    <div className={`Content flex justify-center items-center`}>
      <div className={`w-[500px]`}>
        <TabSelector className={`mt-[30px]`} currentTab={currentTab} setCurrentTab={setCurrentTab}>
          <div>tab1</div>
          <div>tab2</div>
        </TabSelector>
        <TabContainer currentTab={currentTab}>
          <Tab1/>
          <Tab2/>
        </TabContainer>
      </div>
    </div>
  )
}
