# Calculadora API com Express

Este é um serviço de calculadora básica desenvolvido em Node.js usando o framework Express. A API permite realizar operações matemáticas simples, como adição, subtração, multiplicação e divisão.

## Funcionalidades

- **Endpoint `/calculate`:** Este endpoint recebe requisições POST com dados para realizar cálculos.
  - **Payload Esperado:**
    ```json
    {
        "numberOne": 10,
        "numberTwo": 5,
        "operation": "add" // ou sub, mul, div
    }
    ```
  - **Validações de Entrada:**
    - Verifica se a operação é válida.
    - Valida se os números fornecidos são válidos.
  - **Resposta:**
    ```json
    {
        "result": 15 // Resultado da operação realizada
    }
    ```

## Instruções de Uso

1. **Instalação:**

   Certifique-se de ter o Node.js instalado em sua máquina.

   ```bash
   npm install
