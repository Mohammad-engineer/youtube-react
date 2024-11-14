import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import { DNA } from "react-loader-spinner";

const Videos = ({ videos, direction }) => {
  if (!videos?.length)
    return (
      <Stack alignItems='center'
      justifyContent='center'
      height='70vh'
      >
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </Stack>
    );

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) => {
        const shouldRenderCard = item.id.videoId || item.id.channelId;
        if (!shouldRenderCard) return null;

        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard item={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
