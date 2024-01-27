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
import Fallback from "../components/Fallback";

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleEdit = (todo) => {
    setEdit(todo);
    setTodo(todo.title);
  };

  const handleAddTodo = () => {
    if (todo !== "") {
      setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    } else {
      alert("please add some text");
    }
    setTodo("");
  };

  const handleDelete = (id) => {
    const updateTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(updateTodo);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === edit.id) {
        return { ...item, title: todo };
      }

      return item;
    });

    setTodoList(updatedTodos);
    setEdit(null)
    setTodo("")
  };

  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "teal",
          paddingHorizontal: 10,
          paddingVertical: 7,
          borderRadius: 6,
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 5,
          elevation: 4,
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
        <IconButton
          iconColor="#fff"
          icon="pencil"
          onPress={() => handleEdit(item)}
        />
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
      {edit ? (
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            paddingVertical: 12,
            borderRadius: 10,
            marginTop: 10,
            alignItems: "center",
            marginBottom: 25,
          }}
          onPress={() => handleUpdateTodo()}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      ) : (
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
      )}

      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
