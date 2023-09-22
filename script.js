function convertTemperature() {
    const tempVal = parseFloat(document.getElementById("tempValue").value);
    const conversionType = document.getElementById("conversionType").value;
    
    if (isNaN(tempVal)) {
        alert('Please enter a valid number.');
        return;
    }
    
    let result = 0;
    
    if (conversionType === "CTF") {
        result = (tempVal * 9/5) + 32;
        document.getElementById("result").innerText = `${tempVal}°C is equal to ${result.toFixed(2)}°F`;
        
    } else {
        result = (tempVal - 32) * 5/9;
        document.getElementById("result").innerText = `${tempVal}°F is equal to ${result.toFixed(2)}°C`;
    }
}
