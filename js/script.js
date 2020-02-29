
$(document).ready(function () {
  function eventosDeMouse() {

    $('.dropdown').hide()
    //on dropdown
    $('.navbar__list__item__link').eq(4).bind('mouseover', function () {
      $('.dropdown').show('slow')
    })
    // off dropwdown
    $('.dropdown').after(function () {
      $(this).bind('mouseleave', function () {
        $('.dropdown').hide('slow')
      })
    })
    // on arrow
    $('.navbar__list__item--botao').bind('mouseover', function () {
      $('.navbar__list__item--botao__arrow').css('right', 10).css('opacity', 1)
    })
    //off arrow
    $('.navbar__list__item--botao').bind('mouseout', function () {
      $('.navbar__list__item--botao__arrow').css('right', 30).css('opacity', 0)
    })

    $('.card').bind('mouseout', function () {
      $('.fa').addClass('move')
    })

    const $teste = $('.card--plano')
    $teste.each(function () {
      const $cardTop = $('.card--plano__free')
      $cardTop.bind('mouseover', function () {
        $(this).animate({
          'top': 20
        }, 'fast')
      })

      const $cardReturn = $('.card--plano__free')
      $cardTop.bind('mouseout', function () {
        $(this).animate({
          'top': 0
        }, 'fast')
      })
    })
  }
  eventosDeMouse()
  ///////////////////////////////////////////////////////////////////////////////////
  debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };



  function animeScroll() {
    const $navbar = $('.navbar')
    const documentTop = $(document).scrollTop();
    if (documentTop > 100) {
      $navbar.addClass('test')
    } else {
      $navbar.removeClass('test')
    }

    const $minArticle = $('.mini--article')
    animationClass = 'animation--y',
      offset = $(window).height() * 3 / 4;

    $minArticle.each(function () {
      const itemTop = $(this).offset().top;

      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass)
      }

    })
    const $img = $('.img'),
      animationImg = 'animation--x';

    $img.each(function () {
      const itemTop = $(this).offset().top;

      if (documentTop > itemTop - offset) {
        $(this).addClass(animationImg)
      }

    })
    function teste() {
      if (documentTop > 1200)
        $('.numbers__contagem__item').addClass('animation--y2')
    }
    teste()


    const $animaCard = $('.card')
    $animaCard.each(function () {
      const itempTop = $(this).offset().top
      if (documentTop > itempTop - offset) {
        $(this).addClass('animation')
      }
    })

    const $cardOpacity = $('.card--plano__free')
    $cardOpacity.each(function () {
      const itemTop = $(this).offset().top
      if (documentTop > itemTop - offset) {
        $(this).addClass('animation--opacity')
      }
    })
    const $gallery = $('.gallery')
    $gallery.each(function () {
      const itemTop = $(this).offset().top
      if (documentTop > itemTop - offset) {
        $('.gallery__team-1').addClass('animation--gallery')
        $('.gallery__team-2').addClass('animation--gallery')
        $('.gallery__team-3').addClass('animation--gallery')
        $('.gallery__team-4').addClass('animation--gallery')
      }
      const $animationCard = $('.container--card__item')
      $animationCard.each(function () {
        const itemTop = $(this).offset().top
        if (documentTop > itemTop - offset) {
          $(this).addClass('animation--card')
        }
      })
    })
  }
  animeScroll()

  $(document).scroll(debounce(function () {
    animeScroll()
    console.log('teste')
  }, 200))

  const $modal = $('.modals').hide()
  const $video = $('.video')
  $('.play').click(function () {
    $modal.show('slow')
    $video.show('slow')
  })
  const $offModal = $('.off--modal').click(function (e) {
    e.preventDefault()
    $modal.hide('slow')
    $video.hide('slow')
  })
})

$('.obrigado').click(function () {
  alert(`É, temos aqui mais um layout concluido, espero ter atendido as suas espectativas mas independente de eu ter atendido ou não eu quero agradecer á vcs dois por todas a s vezes que me orientaram, ensinaram ou até mesmo por me fazer ser quem eu sou hoje. Eu lembro como se fosse ontem no dia em que conheci vocês dois, Mariana no dia em que te conheci, você me fez uma pergunta e depois uma oferta, "Então jovem oque você prefere, trabalhar pegando pesado no sol rachando ou na cadeira com ar-condicionado?" eu escolhi a segunda opção, em seguida você me ofereceu uma proposta muito intrigante, "oque você acha de nós te darmos o computador para você estudar? claro você deverá nos entregar algo de valor toda semana, oq vc acha jovem?" Eu aceitei, e hoje em dia eu ainda não compri a minha parte do acordo por favor me perdoe \u{1f63f} eu não te conheço a muito tempo mas eu sei que você é uma pessoa maravilhosa, eu etou muito feliz em saber que o Paulo tem uma pessoa tão espetacular como você ao lado dele. Paulo quando te vi pela primeira vez você ainda morava com seus pais na casa que atualmente esta em reforma, Eu não sei se você estava jogando um video game ou mechendo no Pc mas sei que vc estava hipnotizado com a tela kkk, nâo conversamos nesse dia, dps de varios dias nos, nòs tornamos amigos e nesse tempo foram VÁRIOS COROS QUE VOCÊ TOMOU no play claro, pq na vida real eu sempre apanhava kkk. me desculpem mas irei parar por aki pois este texto esta deveras grande, pelo menos no alert (se fuderam kkk), eu poderia colocar muito mais escrita, mas irei guardar para a o pròximo layout ou no caso quando eu conseguir... (vou falar não e spoiler kkk), por mais e isso, THANK YOU FOR ALL, I LOVE YOU TWO \u{2764}`)
  $(this).fadeOut('slow')
  $('.sumiu').fadeOut('slow')
  const footer = document.querySelector('.footer')
  footer.addEventListener('mousemove', (e) => {
    const span = document.createElement('span')
    const x = e.offsetX
    const y = e.offsetY
    span.style.left = x + 'px'
    span.style.top = y + 'px'
    let size = Math.random() * 100
    span.style.height = 50 + size + 'px'
    span.style.width = 260 + size + 'px'
    footer.appendChild(span)
    setTimeout(() => {
      span.remove()
    }, 1500)
  })
})
