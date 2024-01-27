import React, { useState, useEffect } from 'react';
import './App.css';
import Darkmode from "./components/Darkmode/Darkmode";

const Resume = () => {

  return (
    <div>
      < Darkmode/>
      <div className='wrapper'>
        <div className="intro">
          <div className="profile">
            <div className="photo">
              <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/415978542_391262866722199_1313752391239993274_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE4FCTs5iBSTIggv8lkXxgRmBEDnZhPM7GYEQOdmE8zsYZ5UexBDWi7CdvmViPnofxOtYFaUdkNFqu34gtpjUMK&_nc_ohc=K6rfcsmMm5oAX8wvcKU&_nc_ht=scontent.fsgn2-5.fna&cb_e2o_trans=q&oh=03_AdR58t0PutjSv_O8l9vlhb0U3y_OL-a5KTQ3nwYG2QYKJw&oe=65D9B3FD" />
            </div>
            <div className="bio">
              <h1 className="name">Võ Hoàng Hữu Trung</h1>
              <p className="profession">Front-end Developer</p>
            </div>
          </div>
          <div className="intro-section about">
            <h1 className="title">Giới thiệu</h1>
            <p className="paragraph">
              Dù mới bắt đầu và chưa có kinh nghiệm, tôi là người học hỏi nhanh chóng và nhiệt huyết trong việc phát triển kỹ năng phần mềm. Tôi tập trung vào việc xây dựng nền tảng kiến thức vững chắc và mong muốn được tham gia vào những dự án thực tế để phát triển bản thân và đóng góp vào công ty.
            </p>
          </div>
          <div className="intro-section contact">
            <h1 class="title">Thông tin cá nhân</h1>
            <div class="info-section">
              <i class="fas fa-phone"></i>
              <span>(+84)98506-7163</span>
            </div>
            <div class="info-section">
              <i class="fas fa-map-marker-alt"></i>
              <span>Đường 17 Hiệp Bình Chánh , TP Thủ Đức</span>
            </div>
            <div class="info-section">
              <i class="fas fa-paper-plane"></i>
              <span>vohoanghuutrung@gmail.com</span>
            </div>
            <div class="info-section link">
              <i class="fab fa-facebook"></i>
              <a target="_blank" rel="author" href="https://www.facebook.com/profile.php?id=100023704470620">
                <span>Facebook : Hoàng Trung</span>
              </a>
            </div>
            <h1 class="title">Ngôn ngữ</h1>
            <div class="info-section">
              <i class="fas fa-map-marker-alt"></i>
              <div className="progress-bar">
                <div><span id="span1">Tiếng anh</span></div>
                <div className="filled"></div>
                <div className="filled"></div>
                <div className="filled"></div>
                <div className="filled"></div>
                <div className="filled"></div>
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail">
          <div className="detail-section edu">
            <div class="detail-title">
              <div class="title-icon">
                <i class="fas fa-user-graduate"></i>
              </div>
              <span>Học vấn</span>
            </div>
            <div class="detail-content">
              <div class="timeline-block">
                <h1>Ngành phát triển phần mềm</h1>
                <p>Cao đẳng an ninh mạng Ispace</p>
                <time>2022 - Hiện tại</time>
              </div>
            </div>
          </div>
          <div className="detail-section pg-skill">
            <div class="detail-title">
              <div class="title-icon">
                <i class="fas fa-laptop-code"></i>
              </div>
              <span>Kỹ năng</span>
            </div>
            <div className="detail-content">
              <ul className="pg-list">
                <li>
                  <span>HTML</span>
                  <div className="sb-skeleton">
                    <div className="skillbar" style={{ "--pgbar-length": "60%" }}></div>
                  </div>
                </li>
                <li>
                  <span>CSS</span>
                  <div className="sb-skeleton">
                    <div className="skillbar" style={{ "--pgbar-length": "60%" }}></div>
                  </div>
                </li>
                <li>
                  <span>Javascript</span>
                  <div className="sb-skeleton">
                    <div className="skillbar" style={{ "--pgbar-length": "70%" }}></div>
                  </div>
                </li>
                <li>
                  <span>SQL</span>
                  <div className="sb-skeleton">
                    <div className="skillbar" style={{ "--pgbar-length": "50%" }}></div>
                  </div>
                </li>
                <li>
                  <span>C Sharp</span>
                  <div className="sb-skeleton">
                    <div className="skillbar" style={{ "--pgbar-length": "65%" }}></div>
                  </div>
                </li>
                <li>
                  <span>ReactJS</span>
                  <div className="sb-skeleton">
                    <div className="skillbar" style={{ "--pgbar-length": "50%" }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="detail-section tool-skill">
            <div class="detail-title">
              <div class="title-icon">
                <i class="fas fa-tools"></i>
              </div>
              <span>Kỹ năng phụ</span>
            </div>
            <div className="detail-content">
              <ul className="tool-list">
                <li>
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle className="cbar" cx="50" cy="50" r="45" style={{ "--percent": 0.5 }}></circle>
                  </svg>
                  <span className="tl-name">Photoshop</span>
                  <span className="tl-exp">50%</span>
                </li>
                <li>
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle className="cbar" cx="50" cy="50" r="45" style={{ "--percent": 0.5 }}></circle>
                  </svg>
                  <span className="tl-name">Git</span>
                  <span className="tl-exp">50%</span>
                </li>
                <li>
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle className="cbar" cx="50" cy="50" r="45" style={{ "--percent": 0.65 }}></circle>
                  </svg>
                  <span className="tl-name">Edit</span>
                  <span className="tl-exp">65%</span>
                </li>
                <li>
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle className="cbar" cx="50" cy="50" r="45" style={{ "--percent": 0.65 }}></circle>
                  </svg>
                  <span className="tl-name">M Office</span>
                  <span className="tl-exp">65%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default Resume;
