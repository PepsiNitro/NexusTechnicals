const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const portfolio = document.querySelector('#portfolio')
const portfolioContent = document.querySelector('#portfolio-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#003cff')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#003cff')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

portfolio.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'Portfolio',
    width: '400px',
    height: '400px',
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
    mount: portfolioContent,
    onfocus: function () {
      this.setBackground('#003cff')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})