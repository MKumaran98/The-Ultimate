import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import classes from "./timeline.module.css";

const MuiTimeline = ({ data }) => {
  return data.map(({ heading, subheading, icon, timeline, points }) => (
    <Timeline position="alternate" key={heading}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="p1"
          color="white"
          className={classes["time-line-desktop"]}
        >
          {timeline}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span" color="#fa9141">
            {heading}
          </Typography>
          <Typography
            variant="p1"
            component="span"
            color="gray"
            className={classes["time-line-mobile"]}
          >
            {timeline}
          </Typography>
          <Typography color="white" variant="h7" sx={{ display: "block" }}>
            {subheading}
          </Typography>
          <ul className={classes["main-list"]}>
            {points.map((text) => (
              <li className={classes["list-items"]} key={text}>
                {text}
              </li>
            ))}
          </ul>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ));
};

export default MuiTimeline;
