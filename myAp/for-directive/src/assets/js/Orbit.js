const planets = document.querySelectorAll(".planet")
const p_radii = [22,33,50,70,112,138,165,190]
let p_radians = new Array(8).fill(0)
const p_velocities = [-1.607,-1.14,-1,-0.802,-0.434,-0.323,-0.228,-0.182]

const moon =document.querySelector("#moon")
const m_radius = 8
let m_radians = 0
const m_velocity = 10

const p_orbits = document.querySelectorAll(".p-orbit")

p_orbits.forEach((p_orbit,index)=>{
    p_orbit.style.height = `${p_radii[index]}vmin`
    p_orbit.style.width = `${p_radii[index]}vmin`
})
function play(){
    setInterval(()=>{
        planets.forEach((planet,index)=>{
            p_radians[index] += p_velocities[index] * 0.0025
        })
        m_radians += m_velocity * 0.03
    }, 1000/60)
}

function stop(){
    setInterval(()=>{
        planets.forEach((planet,index)=>{
            p_radians[index] -= p_velocities[index] * 0.0025
        })
        m_radians -= m_velocity * 0.03
    }, 1000/60)
}

setInterval(()=>{
    planets.forEach((planet,index)=>{
        planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]}vmin`
        planet.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}vmin`
        
        //p_radians[index] += p_velocities[index] * 0.0025
    })

    //moon.style.left = `${earthX() + (Math.cos(m_radians) * m_radius)}vmin`
    //moon.style.top = `${earthY() + (Math.sin(m_radians) * m_radius)}vmin`
    //m_radians += m_velocity * 0.03
}, 1000/60)

function earthX(){
    return Number(planets[2].style.left.split('vmin')[0])
}

function earthY(){
    return Number(planets[2].style.top.split('vmin')[0])
}
