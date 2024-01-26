import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

// const dummyData = [
//   {
//     id: "01",
//     title: "wash car",
//   },

//   {
//     id: "02",
//     title: "read a book",
//   },
//   {
//     id: "03 ",
//     title: "play game",
//   },
// ];

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const handleDelete = (id) => {
    const updateTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(updateTodo);
  };

  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "darkgreen",
          paddingHorizontal: 10,
          paddingVertical: 7,
          borderRadius: 6,
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "500",
            textTransform: "capitalize",
            flex: 1,
          }}
        >
          {item.title}
        </Text>
        <IconButton iconColor="#fff" icon="pencil" />
        <IconButton
          iconColor="#fff"
          icon="trash-can"
          onPress={() => handleDelete(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        Todoos..
      </Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        value={todo}
        onChangeText={(text) => setTodo(text)}
        placeholder="Add a task"
      />
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          paddingVertical: 12,
          borderRadius: 10,
          marginTop: 10,
          alignItems: "center",
          marginBottom: 25,
        }}
        onPress={() => handleAddTodo()}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Add
        </Text>
      </TouchableOpacity>

      <FlatList data={todoList} renderItem={renderTodos} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
