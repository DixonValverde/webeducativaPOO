let currentLanguage = '';
let currentPrinciple = 0;
let examTimer;
let timeLeft;

const principles = [
    {
        title: "Herencia",
        content: "La herencia permite que una clase adquiera las propiedades y métodos de otra clase. Esto promueve la reutilización del código y establece una relación entre clases padre e hijas.",
        javaExample: `
class Animal {
    void comer() {
        System.out.println("El animal come");
    }
}

class Perro extends Animal {
    void ladrar() {
        System.out.println("El perro ladra");
    }
}`,
        pythonExample: `
class Animal:
    def comer(self):
        print("El animal come")

class Perro(Animal):
    def ladrar(self):
        print("El perro ladra")`,
        explanation: "En este ejemplo, la clase Perro hereda de Animal. Esto significa que un Perro puede tanto comer (método heredado) como ladrar (método propio).",
        videoUrl:"https://youtu.be/0Vhdwsp6PyM?si=T5DsoK9KnygCDp5E"
    },
    {
        title: "Encapsulamiento",
        content: "El encapsulamiento es el principio de ocultar los detalles internos de una clase y solo mostrar la funcionalidad necesaria al mundo exterior.",
        javaExample: `
public class Cuenta {
    private double saldo;
    
    public void depositar(double monto) {
        if (monto > 0) {
            saldo += monto;
        }
    }
}`,
        pythonExample: `
class Cuenta:
    def __init__(self):
        self.__saldo = 0
    
    def depositar(self, monto):
        if monto > 0:
            self.__saldo += monto`,
        explanation: "En este ejemplo, el saldo está encapsulado (private en Java, __ en Python) y solo puede modificarse a través del método depositar.",
        videoUrl:"https://www.youtube.com/watch?v=4pnG1h2-fC8"
    },
    {
        title: "Polimorfismo",
        content: "El polimorfismo permite que diferentes clases sean tratadas como instancias de la misma clase a través de herencia. Permite usar una interfaz común para entidades de diferentes tipos.",
        javaExample: `
interface Figura {
    double calcularArea();
}

class Circulo implements Figura {
    public double calcularArea() {
        return Math.PI * radio * radio;
    }
}

class Cuadrado implements Figura {
    public double calcularArea() {
        return lado * lado;
    }
}`,
        pythonExample: `
class Figura:
    def calcular_area(self):
        pass

class Circulo(Figura):
    def calcular_area(self):
        return math.pi * self.radio ** 2

class Cuadrado(Figura):
    def calcular_area(self):
        return self.lado ** 2`,
        explanation: "Aquí, tanto Círculo como Cuadrado implementan el método calcularArea de manera diferente, pero ambos pueden ser tratados como Figuras.",
        videoUrl:"https://youtu.be/BSw1MLEc4PQ?si=ERBqOtp7ONXx72jT"
    },
    {
        title: "Abstracción",
        content: "La abstracción consiste en ocultar la complejidad y mostrar solo la funcionalidad necesaria al mundo exterior. Permite manejar la complejidad centrándose en lo que hace un objeto en lugar de cómo lo hace.",
        javaExample: `
abstract class Vehiculo {
    abstract void arrancar();
    
    void parar() {
        System.out.println("Vehículo detenido");
    }
}

class Coche extends Vehiculo {
    void arrancar() {
        System.out.println("Coche arrancado");
    }
}`,
        pythonExample: `
from abc import ABC, abstractmethod

class Vehiculo(ABC):
    @abstractmethod
    def arrancar(self):
        pass
    
    def parar(self):
        print("Vehículo detenido")

class Coche(Vehiculo):
    def arrancar(self):
        print("Coche arrancado")`,
        explanation: "Este ejemplo muestra una clase abstracta Vehiculo que define una interfaz común para todos los vehículos, ocultando los detalles específicos de implementación.",
        videoUrl:"https://youtu.be/q11f-Yr_pC4?si=68tu4-0usVc5ClMq"
    },
    {
        title: "Interfaz",
        content: "Una interfaz es una estructura que define un conjunto de métodos que una clase debe implementar. No tiene una implementación, solo una firma de método.",
        javaExample: `
interface Vehiculo {
    void arrancar();
    void detener();
}

// Implementamos la interfaz en una clase
class Coche implements Vehiculo {
    public void arrancar() {
        System.out.println("El coche arranca");
    }

    public void detener() {
        System.out.println("El coche se detiene");
    }
}

// Uso de la interfaz
public class Main {
    public static void main(String[] args) {
        Vehiculo miCoche = new Coche();
        miCoche.arrancar();
        miCoche.detener();
    }
}`,
        pythonExample: `
from abc import ABC, abstractmethod

# Definimos la interfaz
class Vehiculo(ABC):
    @abstractmethod
    def arrancar(self):
        pass

    @abstractmethod
    def detener(self):
        pass

# Implementamos la interfaz en una clase
class Coche(Vehiculo):
    def arrancar(self):
        print("El coche arranca")

    def detener(self):
        print("El coche se detiene")

# Uso de la interfaz
mi_coche = Coche()
mi_coche.arrancar()
mi_coche.detener()`,
        explanation: "interface Vehiculo define los métodos arrancar() y detener(), pero no los implementa,class Coche implementa la interfaz Vehiculo, por lo que debe definir los métodos,en main(), creamos un objeto miCoche y llamamos a sus métodos.",
        videoUrl:"https://youtu.be/hfwtzjOhvKk?si=BhqcDuwoGtvQLzO2"
    },
    
];

const questions = [
    {
        question: "¿Qué es la herencia en POO?",
        options: [
            "Un método para crear objetos",
            "La capacidad de una clase de heredar propiedades y métodos de otra clase",
            "Una forma de encapsular datos",
            "Un tipo de variable"
        ],
        correct: 1
    },
    {
        question: "¿Qué es el encapsulamiento?",
        options: [
            "La capacidad de heredar propiedades",
            "Un tipo de ciclo",
            "El principio de ocultar los detalles internos de una clase",
            "Una forma de crear objetos"
        ],
        correct: 2
    },
    {
        question: "¿Qué es el polimorfismo?",
        options: [
            "La capacidad de tratar diferentes tipos de objetos de manera uniforme",
            "Un tipo de variable",
            "Una forma de crear clases",
            "Un método de encapsulamiento"
        ],
        correct: 0
    },
    {
        question: "¿Qué es la abstracción?",
        options: [
            "Un tipo de variable",
            "Una forma de heredar propiedades",
            "solo la funcionalidad",
            "En ocultar la complejidad y mostrar solo la funcionalidad necesaria al mundo exterior"
        ],
        correct: 3
    },
    {
        question: "¿Qué es una clase abstracta?",
        options: [
            "Una clase que no puede ser instanciada directamente",
            "Una clase sin métodos",
            "Una clase sin propiedades",
            "Una clase final"
        ],
        correct: 0
    },
    {
        question: "¿Qué es una interfaz?",
        options: [
            "Un tipo de variable",
            "es una estructura que define un conjunto de métodos",
            "Una clase concreta",
            "Un método especial"
        ],
        correct: 1
    },
    {
        question: "¿Qué es un objeto?",
        options: [
            "Un tipo de dato primitivo",
            "Una función",
            "Una instancia de una clase",
            "Un método especial"
        ],
        correct: 2
    },
    {
        question: "¿Qué es un constructor?",
        options: [
            "Un método para destruir objetos",
            "Un método especial para inicializar objetos",
            "Una variable global",
            "Un tipo de dato"
        ],
        correct: 1
    },
    {
        question: "¿Qué es un método?",
        options: [
            "Un tipo de variable",
            "Una clase especial",
            "Una función que pertenece a una clase",
            "Un tipo de dato primitivo"
        ],
        correct: 2
    },
    {
        question: "¿Qué es el estado de un objeto?",
        options: [
            "Los valores de sus atributos en un momento dado",
            "El nombre de la clase",
            "Los métodos que tiene",
            "El constructor de la clase"
        ],
        correct: 0
    }
];

// Funciones de navegación
function showLanguageSelection() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('languagePage').style.display = 'block';
}

function selectLanguage(language) {
    currentLanguage = language;
    document.getElementById('languagePage').style.display = 'none';
    showPrinciple();
}

function showPrinciple() {
    document.getElementById('principlePage').style.display = 'block';
    updatePrincipleContent();
}

function updatePrincipleContent() {
    const principle = principles[currentPrinciple];
    document.getElementById('principleTitle').textContent = principle.title;
    document.getElementById('principleContent').innerHTML = `<p>${principle.content}</p>`;
    document.getElementById('codeExample').innerHTML = `<pre>${currentLanguage === 'java' ? principle.javaExample : principle.pythonExample}</pre>`;
    document.getElementById('codeExplanation').innerHTML = `
        <p>${principle.explanation}</p>
        ${principle.videoUrl ? `<div class="video-link">
            <a href="${principle.videoUrl}" target="_blank">Video para mejor comprension</a>
        </div>` : ''}
    `;
    
    // Actualizar botones de navegación
    document.getElementById('prevBtn').style.display = currentPrinciple === 0 ? 'none' : 'block';
    document.getElementById('nextBtn').textContent = currentPrinciple === principles.length - 1 ? 'Ir al Examen' : 'Siguiente';
}

function previousPrinciple() {
    if (currentPrinciple > 0) {
        currentPrinciple--;
        updatePrincipleContent();
    }
}

function nextPrinciple() {
    if (currentPrinciple < principles.length - 1) {
        currentPrinciple++;
        updatePrincipleContent();
    } else {
        startExam();
    }
}

// Funciones del examen
function startExam() {
    document.getElementById('principlePage').style.display = 'none';
    document.getElementById('examPage').style.display = 'block';
    
    // Mostrar preguntas
    const container = document.getElementById('questionContainer');
    container.innerHTML = questions.map((q, index) => `
        <div class="question">
            <h3>Pregunta ${index + 1}</h3>
            <p>${q.question}</p>
            <div class="options">
                ${q.options.map((opt, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${i}">
                        ${opt}
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Iniciar temporizador
    timeLeft = 180; // 3 minutos
    updateTimer();
    examTimer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(examTimer);
        submitExam();
        return;
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('countdown').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
    timeLeft--;
}

function submitExam() {
    clearInterval(examTimer);
    
    // Calcular resultado
    let correct = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            correct++;
        }
    });

    // Mostrar mensaje según la puntuación
    let message;
    if (correct <= 4) {
        message = "Debes repasar nuevamente";
    } else if (correct <= 7) {
        message = "Sabes algo pero debes reforzar";
    } else if (correct <= 9) {
        message = "¡Genial! Casi todo lo sabes de POO";
    } else {
        message = "¡SABES DE POO!!! PUEDES PROGRAMAR YA";
    }

    Swal.fire({
        title: 'Examen Completado',
        text: `Has respondido correctamente ${correct} de 10 preguntas. ${message}`,
        icon: correct >= 8 ? 'success' : 'warning',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        // Reiniciar la aplicación
        window.location.reload();
    });
}


function initTheme() {
    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Manejar el cambio de tema
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Actualizar el tema
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Animar el cambio
        document.documentElement.style.transition = 'all 0.3s ease';
        
        // Actualizar el icono del botón
        updateThemeIcon(newTheme);
    });
}

// Función para actualizar el icono según el tema
function updateThemeIcon(theme) {
    const lightIcon = document.querySelector('.light-icon');
    const darkIcon = document.querySelector('.dark-icon');
    
    if (theme === 'dark') {
        lightIcon.style.opacity = '1';
        darkIcon.style.opacity = '0';
    } else {
        lightIcon.style.opacity = '0';
        darkIcon.style.opacity = '1';
    }
}

// Inicializar el tema cuando se carga la página
document.addEventListener('DOMContentLoaded', initTheme);

// Actualizar el icono inicial
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    updateThemeIcon(currentTheme);
});