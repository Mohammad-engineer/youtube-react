import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Button from '@mui/material/Button';

//icons
import { CheckCircle } from "@mui/icons-material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [RelatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#3fff" }}
              py={1}
              px={2}
            >
              <Link to={`channel/${channelId}`} style={{ color: "gray"}}>
                <Typography variant="body1">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Button variant="body1" sx={{ opacity: 0.7 }} align='center'
                startIcon={<VisibilityIcon />} >
            
                  {parseInt(viewCount).toLocaleString()} views
                </Button >
                <Button variant="body1" sx={{ opacity: 0.7 }}
                 startIcon={<ThumbUpOffAltIcon />}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={RelatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
