import { Button,Flex,ListItem,UnorderedList,Text,Input,IconButton  } from "@chakra-ui/react";
import { useState } from "react";
import { DeleteIcon } from "@chakra-ui/react";

export default function Home()
{
  const [tasks,setTasks]=useState(["1","2","3"]);
  const [Item,SetItem]=useState("");


  function removeItem(taskName){

    setTasks(tasks.filter(task =>{

      return task!=taskName;

    }))

  }
  function AddItem()
  {
    if(Item!="" && !tasks.includes(Item)) {
      let temp=tasks;
      tasks.push(Item);
      setTasks(temp);
      SetItem("");

    }
  }
  return(
    <>
    

    <main>
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      flexDirection="column"
      background="blue.200"
      p="12"
      rounded="16">
        <Flex>
        <Input
         placeholder="Item Name"
          value={Item}
          onChange={(e)=>{
            SetItem(e.target.value);
          }}
          > 
        </Input>
        <Button margin="1" onClick={AddItem}>Add Item</Button>
        </Flex>
        <Flex>
        <UnorderedList>
          {tasks.map((task)=>{
            return(
              <ListItem listStyleType="none"
               key="task.index"
              color="green"
              padding="5px 0">
                {task}
                <Button 
                ml={10}
                 onClick={()=>{
                  return removeItem(task);
                 }}
                 
                 >
                  Remove Item
                </Button>
              </ListItem>
            )
          })}
        </UnorderedList>
        </Flex>
    </Flex>
    </main>
    </>
  )
}