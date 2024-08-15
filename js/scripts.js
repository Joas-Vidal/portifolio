$(document).ready(function() {
    $('.gallery-item').on('click', function() {
      const $video = $(this).find('video');
      const $img = $(this).find('img');
      $('#modal').css('display', 'block');
  
      if ($video.length) {
        $('#modal-img').hide(); // Esconde a imagem no modal
        $('#modal-video').attr('src', $video.attr('src')).show(); // Exibe o vídeo no modal
        $('#caption').text($video.attr('alt'));
      } else if ($img.length) {
        $('#modal-video').hide(); // Esconde o vídeo no modal
        $('#modal-img').attr('src', $img.attr('src')).show(); // Exibe a imagem no modal
        $('#caption').text($img.attr('alt'));
      }
    });
  
    $('.close').on('click', function() {
      $('#modal').hide();
      $('#modal-video').attr('src', ''); // Para o vídeo
    });
  });
  