


async function youtubeIDSearch(idArr) {
 
  let idStr = idArr.join();
  var ajaxOptions = {
    url: `https://www.googleapis.com/youtube/v3/videos?id=${idStr}&key=${youtubeKey}&part=snippet`,
    method: 'GET',
  
  };
  
  let result=await $.ajax(ajaxOptions)
  console.log("what is th await results",result)
}




function foodVideos(videos) {
  for (let video in videos.data) {
    const videoBody = $("<div>", {
      class: `videoDiv video-${videos.data[video].id.videoId}`,
      on: {
        click: () => {
          openYoutubeModal(videos.data[video]);
        }
      }
    });
    const title = $("<p>", {
      class: "videoImageTitle",
      text: videos.data[video].snippet.title
    });
    const videoImage = $("<img>", {
      src: `${videos.data[video].snippet.thumbnails.medium.url}`
    });
    videoBody.append(videoImage, title);

    $(".youtubeVideos").append(videoBody);
  }
}

function openYoutubeModal(videoClicked) {


  let youtubeVideo = $("<iframe>", {
    width: "100%",
    height: "100%",
    src: `https://www.youtube.com/embed/${videoClicked.id.videoId}`,
    frameborder: "1"
  });
  $(".youtubeModal").append(youtubeVideo);

  $(".modal").addClass("animated fadeIn");
  $(".modal .youtubeModal").addClass("animated zoomIn");
  $(".modal").removeClass("hide");
}

function closeYoutubeModal() {
  $(".youtubeModal").html("");
  $(".modal").addClass("hide");
}


