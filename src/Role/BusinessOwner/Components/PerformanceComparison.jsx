import React from "react";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import { BedIcon, FleetIcon } from "../../../components/ui/Icons";

export function PerformanceComparison({
  accommodation = {
    revenue: 265.1,
    roomsCount: 2,
    occupancyRate: 78.4,
  },
  transportation = {
    revenue: 27.9,
    vehiclesCount: 4,
    utilizationRate: 86.2,
  },
  onViewFinancials = () => {},
}) {
  return (
    <Card
      title="Performance Comparison"
      subtitle="Accommodation Stays vs Transportation Rentals"
      action={
        <button
          type="button"
          onClick={onViewFinancials}
          style={{
            fontSize: "12px",
            color: "#0066FF",
            fontWeight: 600,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Full Financials &gt;
        </button>
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            padding: "14px",
            borderRadius: "12px",
            backgroundColor: "#F8FAFC",
            border: "1px solid #E2E8F0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 600,
                fontSize: "13px",
                color: "#1E293B",
              }}
            >
              <BedIcon size={16} color="#0066FF" />
              Accommodation Revenue
            </div>
            <Badge variant="blue" size="sm">
              {accommodation.roomsCount} Rooms
            </Badge>
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#0F172A",
              marginBottom: "6px",
            }}
          >
            ${accommodation.revenue}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "11px",
              color: "#64748B",
              marginBottom: "6px",
            }}
          >
            <span>Occupancy Rate</span>
            <span style={{ fontWeight: 700, color: "#0066FF" }}>
              {accommodation.occupancyRate}%
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "6px",
              backgroundColor: "#E2E8F0",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${accommodation.occupancyRate}%`,
                height: "100%",
                backgroundColor: "#0066FF",
                borderRadius: "999px",
              }}
            />
          </div>
        </div>

        <div
          style={{
            padding: "14px",
            borderRadius: "12px",
            backgroundColor: "#F8FAFC",
            border: "1px solid #E2E8F0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 600,
                fontSize: "13px",
                color: "#1E293B",
              }}
            >
              <FleetIcon size={16} color="#059669" />
              Transportation Revenue
            </div>
            <Badge variant="green" size="sm">
              {transportation.vehiclesCount} Vehicles
            </Badge>
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#0F172A",
              marginBottom: "6px",
            }}
          >
            ${transportation.revenue}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "11px",
              color: "#64748B",
              marginBottom: "6px",
            }}
          >
            <span>Fleet Utilization</span>
            <span style={{ fontWeight: 700, color: "#059669" }}>
              {transportation.utilizationRate}%
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "6px",
              backgroundColor: "#E2E8F0",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${transportation.utilizationRate}%`,
                height: "100%",
                backgroundColor: "#059669",
                borderRadius: "999px",
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default PerformanceComparison;
