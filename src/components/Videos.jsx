import {Stack,Box} from '@mui/material'
import {VideoCard ,ChannelCard}  from './';

const Videos = ({videos ,direction}) => {

  console.log(videos,'RelatedVideos');
  if(!videos?.length) return 'Loading...';
  return (
    <Stack direction={direction || "row"} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item,index)=>(
        <Box key={index}>
          {item.id.videoId && <VideoCard item={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>

      ))}
    </Stack>
  )
}

export default Videos