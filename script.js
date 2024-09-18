//your JS code here. If required.
const bands = [
  'The Plot in You', 
  'The Devil Wears Prada', 
  'Pierce the Veil', 
  'Norma Jean', 
  'The Bled', 
  'Say Anything', 
  'The Midway State', 
  'We Came as Romans', 
  'Counterparts', 
  'Oh, Sleeper', 
  'A Skylit Drive', 
  'Anywhere But Here', 
  'An Old Dog'
];

// Function to strip out "a", "an", "the" from the start of a title
function stripArticle(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands ignoring "a", "an", and "the"
const sortedBands = bands.sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

// Get the UL element
const bandList = document.getElementById('band');

// Create the list items and append to the UL
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  bandList.appendChild(li);
});

