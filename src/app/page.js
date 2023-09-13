export default function Home() {
  return (
    <div className="container">
      <div className="header">이미지</div>
      <div className="content">
        <div className="left">
          <div className="left_header p3 upperline">
            <img></img>
            <h3 style={{ display: "inline" }}>육각몬의 세상</h3>
          </div>
          <div className="left_personnel p3 upperline">
            <p>총인원</p>
            <p>자주오는 인원</p>
          </div>
          <div className="left_write upperline p3">
            <button>글쓰기</button>
          </div>
          <div className="left_likeList upperline p3">
            <h5>즐겨찾는 게시판</h5>
            <p>
              <li>게시판1</li>
              <li>게시판2</li>
              <li>게시판3</li>
            </p>
          </div>
          <div className="left_boardList upperline p3">
            <h5>게시판 목록</h5>
            <p>
              <li>게시판1</li>
              <li>게시판2</li>
              <li>게시판3</li>
            </p>
          </div>
          <div className="left_boardList upperline p3">
            <h5>게시판 목록</h5>
            <p>
              <li>게시판1</li>
              <li>게시판2</li>
              <li>게시판3</li>
            </p>
          </div>
          <div className="left_boardList upperline p3">
            <h5>게시판 목록</h5>
            <p>
              <li>게시판1</li>
              <li>게시판2</li>
              <li>게시판3</li>
            </p>
          </div>
        </div>
        <div className="right">본문</div>
      </div>
      <div className="footer">푸터</div>
    </div>
  );
}
