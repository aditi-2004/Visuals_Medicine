import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import medicinesData from "../data/medicines.json";

export default function MedicineDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const med = medicinesData.find((m) => String(m.id) === String(id));

  if (!med) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "var(--glass-2)",
          borderRadius: "var(--card-radius)",
          border: "1px solid var(--border)",
        }}
      >
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>🔍</div>
        <h2 style={{ margin: "0 0 12px", color: "var(--text)" }}>
          Medicine Not Found
        </h2>
        <p style={{ margin: "0 0 24px", color: "var(--text-light)" }}>
          The medicine you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/categories">
          <button className="btn-primary">← Back to Categories</button>
        </Link>
      </div>
    );
  }

  const getCategoryColor = (category) => {
    const colors = {
      Gyne: "#ec4899",
      Ortho: "#0b76ff",
      General: "#22c55e",
    };
    return colors[category] || "#64748b";
  };

  const tabs = [
    { id: "description", label: "Description", icon: "📋" },
    { id: "composition", label: "Composition", icon: "🧪" },
    // { id: 'dosage', label: 'Dosage', icon: '⏰' },
    // { id: 'reviews', label: 'Reviews', icon: '⭐' }
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "24px",
          fontSize: "14px",
          color: "var(--muted)",
        }}
      >
        <Link to="/" style={{ color: "var(--accent)" }}>
          Home
        </Link>
        <span>→</span>
        <Link to="/categories" style={{ color: "var(--accent)" }}>
          Categories
        </Link>
        <span>→</span>
        <span>{med.category}</span>
        <span>→</span>
        <span style={{ color: "var(--text)" }}>{med.name}</span>
      </nav>

      <div className="detail">
        {/* Left Column - Image */}
<div className="left">
  <div
    style={{
      background: "white",
      padding: "24px",
      borderRadius: "var(--card-radius)",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--border)",
      position: "sticky",
      top: "120px",
      maxWidth: "420px",    // max width container for the image
      margin: "0 auto",     // center horizontally if container grows
    }}
  >
    <img
      src={process.env.PUBLIC_URL + "/" + med.image}
      alt={med.name}
      style={{
        width: "100%",      // make image fill container width
        height: "auto",     // keep aspect ratio
        borderRadius: "12px",
        background: "#f8fafc",
        objectFit: "contain",
        maxHeight: "400px"  // limit max height for better layout
      }}
      onError={(e) => {
        e.target.style.display = "none";
        e.target.parentElement.innerHTML = `
          <div style="
            width: 100%; 
            height: 300px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            background: linear-gradient(135deg, #f8fafc, #e2e8f0);
            border-radius: 12px;
            color: #64748b;
            font-size: 64px;
          ">💊</div>
        `;
      }}
    />
  </div>
</div>


        {/* Right Column - Details */}
        <div className="right">
          {/* Header Section */}
          <div
            style={{
              borderBottom: "1px solid var(--border)",
              paddingBottom: "24px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: getCategoryColor(med.category),
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {med.category}
                </div>

                <h1
                  style={{
                    margin: "0 0 8px",
                    fontSize: "32px",
                    fontWeight: "800",
                    color: "var(--text)",
                    lineHeight: "1.2",
                  }}
                >
                  {med.name}
                </h1>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div>
            {/* Tab Navigation */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                marginBottom: "24px",
                borderBottom: "1px solid var(--border)",
                overflowX: "auto",
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    background: "transparent",
                    color:
                      activeTab === tab.id ? "var(--accent)" : "var(--muted)",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    borderBottom:
                      activeTab === tab.id
                        ? "2px solid var(--accent)"
                        : "2px solid transparent",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{ minHeight: "200px" }}>
              {activeTab === "description" && (
                <div>
                  <h3 style={{ margin: "0 0 16px", color: "var(--text)" }}>
                    Product Description
                  </h3>
                  <p
                    style={{
                      color: "var(--text-light)",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                    }}
                  >
                    {med.description ||
                      "This is a high-quality pharmaceutical product manufactured under strict quality control standards. It is designed to provide effective treatment while ensuring patient safety."}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(250px, 1fr))",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        padding: "16px",
                        background: "var(--accent-light)",
                        borderRadius: "8px",
                      }}
                    >
                      <h4 style={{ margin: "0 0 8px", color: "var(--text)" }}>
                        ✅ Benefits
                      </h4>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: "20px",
                          color: "var(--text-light)",
                        }}
                      >
                        <li>Clinically proven effectiveness</li>
                        <li>High quality ingredients</li>
                        <li>Minimal side effects</li>
                      </ul>
                    </div>
                    <div
                      style={{
                        padding: "16px",
                        background: "#f59e0b15",
                        borderRadius: "8px",
                      }}
                    >
                      <h4 style={{ margin: "0 0 8px", color: "var(--text)" }}>
                        ⚠️ Precautions
                      </h4>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: "20px",
                          color: "var(--text-light)",
                        }}
                      >
                        <li>Follow prescribed dosage</li>
                        <li>Consult doctor if pregnant</li>
                        <li>Store in cool, dry place</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "composition" && (
                <div>
                  <h3 style={{ margin: "0 0 16px", color: "var(--text)" }}>
                    Active Ingredients
                  </h3>
                  <div
                    style={{
                      background: "white",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        padding: "12px 16px",
                        background: "var(--accent-light)",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      {med.composition || med.salt}
                    </div>
                    <div style={{ padding: "16px" }}>
                      <p style={{ margin: 0, color: "var(--text-light)" }}>
                        Each tablet/capsule contains the above mentioned active
                        pharmaceutical ingredients in therapeutically effective
                        concentrations as per regulatory standards.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "dosage" && (
                <div>
                  <h3 style={{ margin: "0 0 16px", color: "var(--text)" }}>
                    Dosage Information
                  </h3>
                  <div
                    style={{
                      background: "#22c55e15",
                      padding: "20px",
                      borderRadius: "8px",
                      border: "1px solid #22c55e30",
                    }}
                  >
                    <h4 style={{ margin: "0 0 12px", color: "var(--text)" }}>
                      Recommended Dosage
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        color: "var(--text-light)",
                        lineHeight: "1.6",
                      }}
                    >
                      <strong>Adults:</strong> Take as directed by your
                      healthcare provider. Typically 1-2 tablets/capsules daily
                      with meals.
                      <br />
                      <strong>Children:</strong> Consult pediatrician for
                      appropriate dosage.
                      <br />
                      <strong>Elderly:</strong> May require dose adjustment.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#ef444415",
                      padding: "16px",
                      borderRadius: "8px",
                      marginTop: "16px",
                      border: "1px solid #ef444430",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "var(--text-light)",
                      }}
                    >
                      ⚠️ <strong>Important:</strong> Do not exceed recommended
                      dose. Always consult your healthcare provider before
                      starting any new medication.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h3 style={{ margin: "0 0 16px", color: "var(--text)" }}>
                    Customer Reviews
                  </h3>

                  <div style={{ textAlign: "center", marginTop: "24px" }}>
                    <button className="btn-secondary">Load More Reviews</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Actions */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "24px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Link to="/categories" style={{ flex: 1, minWidth: "200px" }}>
              <button
                className="btn-secondary"
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  fontSize: "14px",
                }}
              >
                ← Back to Categories
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section
        style={{
          marginTop: "60px",
          padding: "32px",
          background: "var(--glass-2)",
          borderRadius: "var(--card-radius)",
          border: "1px solid var(--border)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h3
          style={{
            margin: "0 0 24px",
            fontSize: "24px",
            fontWeight: "700",
            color: "var(--text)",
          }}
        >
          Related Products
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {medicinesData
            .filter((m) => m.category === med.category && m.id !== med.id)
            .slice(0, 3)
            .map((relatedMed) => (
              <Link
                key={relatedMed.id}
                to={`/medicine/${relatedMed.id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  className="card"
                  style={{
                    padding: "16px",
                    cursor: "pointer",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "120px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: "12px",
                      background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/" + relatedMed.image}
                      alt={relatedMed.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML =
                          '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #64748b; font-size: 32px;">💊</div>';
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      margin: "0 0 6px",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "var(--text)",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {relatedMed.name}
                  </h4>
                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: "12px",
                      color: "var(--text-light)",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {relatedMed.composition || relatedMed.salt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "var(--success)",
                      }}
                    >
                      ₹{relatedMed.price}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--muted)",
                        background: "var(--accent-light)",
                        padding: "2px 8px",
                        borderRadius: "8px",
                      }}
                    >
                      {relatedMed.weight}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
