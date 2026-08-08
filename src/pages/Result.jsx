function Result() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef1f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "950px",
          background: "#ffffff",
          padding: "12px",
          boxShadow: "0 15px 45px rgba(15, 23, 42, 0.15)",
        }}
      >
        {/* Outer border */}
        <div
          style={{
            border: "2px solid #c9a227",
            padding: "8px",
          }}
        >
          {/* Inner border */}
          <div
            style={{
              border: "1px solid #d9dde5",
              minHeight: "560px",
              padding: "55px 70px",
              textAlign: "center",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            {/* Top branding */}
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "4px",
                color: "#1e3a5f",
                marginBottom: "25px",
              }}
            >
              QUIZ MASTER
            </div>

            {/* Certificate title */}
            <h1
              style={{
                margin: "0",
                color: "#162b46",
                fontSize: "42px",
                letterSpacing: "5px",
                fontWeight: "600",
              }}
            >
              CERTIFICATE
            </h1>

            <div
              style={{
                marginTop: "8px",
                color: "#c9a227",
                fontFamily: "Arial, sans-serif",
                fontSize: "15px",
                fontWeight: "600",
                letterSpacing: "3px",
              }}
            >
              OF ACHIEVEMENT
            </div>

            <p
              style={{
                margin: "35px 0 12px",
                color: "#64748b",
                fontFamily: "Arial, sans-serif",
                fontSize: "15px",
              }}
            >
              This certificate is proudly presented to
            </p>

            {/* Student name */}
            <h2
              style={{
                margin: "0 auto",
                padding: "0 50px 12px",
                color: "#162b46",
                fontSize: "38px",
                fontWeight: "600",
                fontStyle: "italic",
                borderBottom: "1px solid #c9a227",
              }}
            >
              Student Name
            </h2>

            <p
              style={{
                margin: "25px auto 8px",
                maxWidth: "650px",
                color: "#475569",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              for successfully completing the
            </p>

            {/* Quiz name */}
            <h3
              style={{
                margin: "5px 0",
                color: "#1e3a5f",
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              HTML Fundamentals Quiz
            </h3>

            <p
              style={{
                margin: "10px 0 25px",
                color: "#64748b",
                fontFamily: "Arial, sans-serif",
                fontSize: "15px",
              }}
            >
              with a demonstrated score of
            </p>

            {/* Score */}
            <div
              style={{
                display: "inline-flex",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "130px",
                padding: "10px 25px",
                border: "1px solid #c9a227",
                color: "#162b46",
                fontFamily: "Arial, sans-serif",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              90%
            </div>

            {/* Bottom section */}
            <div
              style={{
                marginTop: "45px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "40px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <div style={{ textAlign: "left", minWidth: "180px" }}>
                <div
                  style={{
                    borderTop: "1px solid #94a3b8",
                    paddingTop: "8px",
                    color: "#475569",
                    fontSize: "12px",
                  }}
                >
                  ISSUE DATE
                </div>
                <div
                  style={{
                    color: "#162b46",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  August 7, 2026
                </div>
              </div>

              {/* Certificate seal */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  border: "2px solid #c9a227",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c9a227",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}
              >
                VERIFIED
              </div>

              <div
                style={{
                  textAlign: "right",
                  minWidth: "180px",
                }}
              >
                <div
                  style={{
                    borderTop: "1px solid #94a3b8",
                    paddingTop: "8px",
                    color: "#475569",
                    fontSize: "12px",
                  }}
                >
                  CERTIFICATE ID
                </div>
                <div
                  style={{
                    color: "#162b46",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  QM-2026-0001
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div
              style={{
                position: "absolute",
                top: "18px",
                left: "18px",
                width: "35px",
                height: "35px",
                borderTop: "2px solid #c9a227",
                borderLeft: "2px solid #c9a227",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                width: "35px",
                height: "35px",
                borderTop: "2px solid #c9a227",
                borderRight: "2px solid #c9a227",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "18px",
                left: "18px",
                width: "35px",
                height: "35px",
                borderBottom: "2px solid #c9a227",
                borderLeft: "2px solid #c9a227",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "18px",
                right: "18px",
                width: "35px",
                height: "35px",
                borderBottom: "2px solid #c9a227",
                borderRight: "2px solid #c9a227",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;