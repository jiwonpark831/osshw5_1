import React from 'react'
import List from "../List";
import Create from "../Create";
import Update from "../Update";
import Delete from "../Delete";
import { useState } from 'react';

export default function ShowList() {

    const [list, setList] = useState([]);
    const [create, setCreate] = useState({ id: "", title: "", year: "", people: "" });
    const [update, setUpdate] = useState({ id: "", title: "", year: "", people: "" });
    const [deletem, setDeletem] = useState("");

    function getMovies() {
        fetch("https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data")
            .then((response) => response.json())
            .then((data) => setList(data));
    }

    function createMovies() {
        fetch("https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(create),
        }).then(() => {
            setCreate({ id: "", title: "", year: "", people: "" });
            getMovies();
        });
    }

    function updateMovies() {
        fetch(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data/${update.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(update),
        }).then(() => {
            setUpdate({ id: "", title: "", year: "", people: "" });
            getMovies();
        });
    }

    function deleteMovies() {
        fetch(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data/${deletem}`, {
            method: "DELETE",
        }).then(() => {
            setDeletem("");
            getMovies();
        });
    }

    return (
        <div style={{ textAlign: "right", margin: "20px", backgroundColor: "skyblue" }}>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal">추가하기</button>
            <Create create={create} setCreate={setCreate} createMovies={createMovies} />
            <br />
            <br />
            <button onClick={getMovies}>목록 보기</button>
            <List list={list} />
            <br />
            <br />
            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">수정하기</button>
            <Update update={update} setUpdate={setUpdate} updateMovies={updateMovies} />
            <br />
            <br />
            <Delete deletem={deletem} setDeletem={setDeletem} deleteMovies={deleteMovies} />

        </div>
    )
}
