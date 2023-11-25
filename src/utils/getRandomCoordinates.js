
const citiesCoordinates = [
    [40.7128, -74.0060], // New York City, USA
    [35.6895, 139.6917], // Tokyo, Japan
    [51.5074, -0.1278], // London, United Kingdom
    [48.8566, 2.3522], // Paris, France
    [39.9042, 116.4074], // Beijing, China
    [55.7558, 37.6176], // Moscow, Russia
    [-33.8688, 151.2093], // Sydney, Australia
    [-22.9068, -43.1729], // Rio de Janeiro, Brazil
    [-33.9249, 18.4241], // Cape Town, South Africa
    [19.0760, 72.8777], // Mumbai, India
    [19.4326, -99.1332], // Mexico City, Mexico
    [52.5200, 13.4050], // Berlin, Germany
    [41.0082, 28.9784], // Istanbul, Turkey
    [37.5665, 126.9780], // Seoul, South Korea
    [30.0444, 31.2357], // Cairo, Egypt
    [-34.6118, -58.4173], // Buenos Aires, Argentina
    [43.6532, -79.3832], // Toronto, Canada
    [25.2769, 55.2963], // Dubai, United Arab Emirates
    [41.9028, 12.4964], // Rome, Italy
    [-1.286389, 36.817223], // Nairobi, Kenya
    [34.0522, -118.2437], // Los Angeles, USA
    [31.2304, 121.4737], // Shanghai, China
    [52.3676, 4.9041], // Amsterdam, Netherlands
    [40.4168, -3.7038], // Madrid, Spain
    [-6.2088, 106.8456], // Jakarta, Indonesia
    [13.7563, 100.5018], // Bangkok, Thailand
    [-34.6118, -58.4173], // Buenos Aires, Argentina
    [-12.0464, -77.0428], // Lima, Peru
    [37.9838, 23.7275], // Athens, Greece
    [1.3521, 103.8198], // Singapore, Singapore
    [49.2827, -123.1207], // Vancouver, Canada
    [-26.2041, 28.0473], // Johannesburg, South Africa
    [4.7109, -74.0721], // Bogotá, Colombia
    [53.3498, -6.2603], // Dublin, Ireland
    [60.1695, 24.9354], // Helsinki, Finland
    [3.1390, 101.6869], // Kuala Lumpur, Malaysia
    [48.8566, 2.3522], // Paris, France
    [59.9139, 10.7522], // Oslo, Norway
    [52.5200, 13.4050], // Berlin, Germany
    [50.0755, 14.4378], // Prague, Czech Republic
    [47.4979, 19.0402], // Budapest, Hungary
    [55.6761, 12.5683], // Copenhagen, Denmark
    [59.3293, 18.0686], // Stockholm, Sweden
    [19.4326, -99.1332], // Mexico City, Mexico
    [28.6139, 77.2090], // New Delhi, India
    [41.0082, 28.9784], // Istanbul, Turkey
    [52.5200, 13.4050], // Berlin, Germany
    [30.0444, 31.2357], // Cairo, Egypt
    [13.7563, 100.5018], // Bangkok, Thailand
    [1.3521, 103.8198], // Singapore, Singapore
    [13.41, 122.56], // Manila, Philippines
    [21.0285, 105.8542], // Hanoi, Vietnam
    [52.2297, 21.0122], // Warsaw, Poland
    [47.4979, 19.0402], // Budapest, Hungary
    [37.9838, 23.7275], // Athens, Greece
    [44.4268, 26.1025], // Bucharest, Romania
    [38.7223, -9.1393], // Lisbon, Portugal
    [53.3498, -6.2603], // Dublin, Ireland
    [59.9139, 10.7522], // Oslo, Norway
    [60.1695, 24.9354], // Helsinki, Finland
    [45.8150, 15.9819], // Zagreb, Croatia
    [44.7866, 20.4489], // Belgrade, Serbia
    [42.6977, 23.3219], // Sofia, Bulgaria
    [48.8566, 2.3522], // Paris, France
    [46.0569, 14.5058], // Ljubljana, Slovenia
    [50.8503, 4.3517], // Brussels, Belgium
    [49.6117, 6.1319], // Luxembourg City, Luxembourg
    [46.8182, 8.2275], // Bern, Switzerland
    [46.2044, 6.1432], // Geneva, Switzerland
    [47.3769, 8.5417], // Zurich, Switzerland
    [52.3676, 4.9041], // Amsterdam, Netherlands
    [51.9225, 4.47917], // Rotterdam, Netherlands
    [52.0705, 4.3007], // The Hague, Netherlands
    [52.0907, 5.1214], // Utrecht, Netherlands
    [50.8503, 4.3517], // Brussels, Belgium
    [51.2194, 4.4025], // Antwerp, Belgium
    [51.0543, 3.7174], // Ghent, Belgium
    [51.2093, 3.2247], // Bruges, Belgium
    [41.3806, 2.1228], // Barcelona, Spain
    [40.4168, -3.7038], // Madrid, Spain
    [39.4699, -0.3763], // Valencia, Spain
    [37.3886, -5.9822], // Seville, Spain
    [43.2630, -2.9350], // Bilbao, Spain
    [36.7213, -4.4210], // Malaga, Spain
    [37.9838, -1.1285], // Murcia, Spain
    [41.6488, -0.8891], // Zaragoza, Spain
    [39.5701, 2.6496], // Palma de Mallorca, Spain
    [38.3452, -0.4810], // Alicante, Spain
    [36.1699, -115.1398], // Las Vegas, USA
    [25.7617, -80.1918], // Miami, USA
    [37.7749, -122.4194], // San Francisco, USA
    [41.8781, -87.6298], // Chicago, USA
    [29.7604, -95.3698], // Houston, USA
    [39.9526, -75.1652], // Philadelphia, USA
    [33.4484, -112.0740], // Phoenix, USA
    [32.7157, -117.1611], // San Diego, USA
    [32.7767, -96.7970], // Dallas, USA
    [29.4241, -98.4936], // San Antonio, USA
    [30.2500, -97.7500], // Austin, USA
    [30.3322, -81.6556], // Jacksonville, USA
    [39.7684, -86.1581], // Indianapolis, USA
    [39.9612, -82.9988], // Columbus, USA
    [35.2271, -80.8431], // Charlotte, USA
    [42.3314, -83.0458], // Detroit, USA
    [35.1495, -90.0490], // Memphis, USA
    [36.1627, -86.7816], // Nashville, USA
    [39.2904, -76.6122], // Baltimore, USA
    [45.5051, -122.6750], // Portland, USA
    [38.2527, -85.7585], // Louisville, USA
    [43.0389, -87.9065], // Milwaukee, USA
    [35.0844, -106.6504], // Albuquerque, USA
    [32.2226, -110.9747], // Tucson, USA
    [36.7468, -119.7726], // Fresno, USA
    [38.5816, -121.4944], // Sacramento, USA
    [39.0997, -94.5786], // Kansas City, USA
    [33.7490, -84.3880], // Atlanta, USA
    [35.7796, -78.6382], // Raleigh, USA
    [41.2565, -95.9345], // Omaha, USA
    [38.8339, -104.8214], // Colorado Springs, USA
    [36.1540, -95.9928], // Tulsa, USA
    [44.9778, -93.2650], // Minneapolis, USA
    [41.4993, -81.6944], // Cleveland, USA
    [37.6872, -97.3301], // Wichita, USA
    [38.8783, -77.0687], // Arlington, USA
    [27.9506, -82.4572], // Tampa, USA
    [40.4093, 49.8671], // Baku, Azerbaijan
    [41.7167, 44.7833], // Tbilisi, Georgia
    [40.1792, 44.4991], // Yerevan, Armenia
    [35.6895, 51.3890], // Tehran, Iran
    [24.7136, 46.6753], // Riyadh, Saudi Arabia
    [21.3891, 39.8579], // Jeddah, Saudi Arabia
    [29.3759, 47.9774], // Kuwait City, Kuwait
    [25.2769, 51.5200], // Doha, Qatar
    [23.6100, 58.5946], // Muscat, Oman
    [26.2185, 50.5832], // Manama, Bahrain
    [31.9516, 35.9234], // Amman, Jordan
    [33.8869, 35.5131], // Beirut, Lebanon
    [33.5138, 36.2765], // Damascus, Syria
    [31.7683, 35.2137], // Jerusalem, Israel
    [32.0853, 34.7818], // Tel Aviv, Israel
    ];

export const getRandomCoordinates = async () => {
    const randomIndex = Math.floor(Math.random() * citiesCoordinates.length);
    return citiesCoordinates[randomIndex];
}
