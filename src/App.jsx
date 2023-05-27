import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DiaryList from "./DiaryList";
import DiaryDetail from "./DiaryDetail";
import Diary from "./Diary";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/person" element={<Person />} />
        <Route path="/diary" element={<DiaryList />} />
        <Route path="/diary/:diaryNum" element={<DiaryDetail />} />
        <Route path="/dtitle" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>홈페이지</h2>;
}
function Person() {
  return <h2>마이 페이지</h2>;
}

function NotFound() {
  return <h1>페이지가 없습니다</h1>;
}
function Header() {
  return (
    <div
      style={{ flex: "true", flexDirection: "row", backgroundColor: "grey" }}
    >
      <div style={{ width: 100, display: "inline-block" }}>
        <Link to="/">Home</Link>
      </div>
      <div style={{ width: 100, display: "inline-block" }}>
        <Link to="/person">Mypage</Link>
      </div>
      <div style={{ width: 100, display: "inline-block" }}>
        <Link to="/diary">Diary</Link>
      </div>
    </div>
  );
}

export default App;
