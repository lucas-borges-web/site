<?php 
  $portfolio = array(
    array(
      'image' => 'public/img/portfolio/america.jpg',
      'name' => 'América',
      'link' => '',
      'tech' => array('HTML5', 'CSS3', 'JavaScript', 'Jquery', 'LESS', 'Bootstrap')
    ),
    array(
      'image' => 'public/img/portfolio/bell.jpg',
      'name' => 'Bell Design',
      'link' => '',
      'tech' => array('HTML5', 'CSS3', 'JavaScript', 'Jquery', 'LESS')
    ),
    array(
      'image' => 'public/img/portfolio/criancafeliz.jpg',
      'name' => 'Criança Feliz',
      'link' => '',
      'tech' => array('HTML5', 'CSS3', 'JavaScript', 'Jquery', 'LESS', 'Bootstrap')
    ),
    array(
      'image' => 'public/img/portfolio/dicafer.jpg',
      'name' => 'Dicafer',
      'link' => '',
      'tech' => array('OpenCart')
    ),
    array(
      'image' => 'public/img/portfolio/dilo.jpg',
      'name' => 'Dilo',
      'link' => '',
      'tech' => array('Painel em Wordpress', 'HTML5', 'CSS3', 'Jquery', 'Bootstrap')
    ),
    array(
      'image' => 'public/img/portfolio/femina.jpg',
      'name' => 'Femina',
      'link' => '',
      'tech' => array('HTML5', 'CSS3', 'JavaScript', 'Jquery', 'LESS', 'Bootstrap')
    ),
    array(
      'image' => 'public/img/portfolio/flock.jpg',
      'name' => 'Flock',
      'link' => '',
      'tech' => array('HTML5', 'CSS3', 'JavaScript', 'Jquery', 'LESS', 'Bootstrap')
    ),
    array(
      'image' => 'public/img/portfolio/mrbad.jpg',
      'name' => 'Mr. Bad',
      'link' => '',
      'tech' => array('OpenCart')
    ),
    array(
      'image' => 'public/img/portfolio/planetaagua.jpg',
      'name' => 'Planeta Água',
      'link' => '',
      'tech' => array('HTML5', 'CSS3', 'JavaScript', 'Jquery', 'SASS', 'Webpack', 'Bootstrap')
    ),
    array(
      'image' => 'public/img/portfolio/soprano.jpg',
      'name' => 'Soprano',
      'link' => '',
      'tech' => array('HTML5', 'CSS3', 'JavaScript', 'Jquery', 'SASS', 'Webpack', 'Bootstrap')
    ),
    array(
      'image' => 'public/img/portfolio/teus.jpg',
      'name' => 'Teus',
      'link' => '',
      'tech' => array('HTML5', 'CSS3', 'JavaScript', 'Jquery', 'LESS')
    ),
    array(
      'image' => 'public/img/portfolio/tga.jpg',
      'name' => 'TGA Sistemas',
      'link' => '',
      'tech' => array('Wordpress')
    )
  );
?>
<section id="portfolio" class="portfolio">
  <div class="headDefault">
    <h2 class="titleDefault">Meu Portfólio</h2>
    <p class="descriptionDefault">Conheça abaixo alguns dos meus serviços! Conheça abaixo alguns dos meus serviços! Conheça abaixo alguns dos meus serviços!</p>
  </div>
  <div class="portfolio__items">
    <?php foreach ($portfolio as $key => $item) { ?>
      <div class="portfolio__item">
        <a href="<?= $item['link'] ?>" target="_blank">
          <div class="portfolio__image" style="background-image: url('<?= $item['image'] ?>')"></div>
          <div class="portfolio__overlay">
            <div>
              <p class="portfolio__name"><?= $item['name'] ?></p>
              <ul class="portfolio__tech">
                <?php for ($i=0; $i < count($item[tech]); $i++) { ?>
                  <li><?= $item[tech][$i] ?></li>
                <?php } ?>
              </ul>
              <a href="" target="_blank" class="portfolio__link"> > </a>
            </div>
          </div>
        </a>
      </div>
    <?php } ?>
  </div>
</section>