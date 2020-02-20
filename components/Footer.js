import React from 'react';

export default function Footer() {
  return (
    <>
      <footer>
        Powered by&nbsp;<a href="mailto:toan@chiatienan.com">toan@chia-tiền-ăn.cơm</a>
      </footer>
      <style jsx>{`
        footer {
          margin-top: 1rem;
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}
