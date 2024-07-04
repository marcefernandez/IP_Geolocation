const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key':
        '71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5',
        'X-RapidAPI-Host':
        'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
}

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const $ = Selector => document.querySelector(Selector)

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const { value } = $input
    if (!value) return

    $submit.setAttribute('disable', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disable')
    $submit.removeAttribute('aria-busy')

})