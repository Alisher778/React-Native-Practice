<?php

    function request($host, $path, $url_params = array()) {
        // Send Yelp API Call
        try {
            $curl = curl_init();
            if (FALSE === $curl)
                throw new Exception('Failed to initialize');

            $url = $host . $path . "?" . http_build_query($url_params);
            curl_setopt_array($curl, array(
                CURLOPT_URL => "https://api.yelp.com/v3/businesses/vector-moving-scotch-plains/reviews",
                CURLOPT_RETURNTRANSFER => true,  // Capture response.
                CURLOPT_ENCODING => "",  // Accept gzip/deflate/whatever.
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => array(
                    "authorization: Bearer " . "VQo5EHk9TXAtuiT9Kk2HUCd3o40orwERq3p-AqKCIolp2GPW431m-nH4u3-BP3vacrThb9NCxxEQhfNxdEuvotUzFia9PiU9nBDEOGORs2rMYYGBuMz3oh0rvDBRXHYx",
                    "cache-control: no-cache",
                ),
            ));

            $response = curl_exec($curl);
            echo '<script> var reviews='.$response.'</script>';

            if (FALSE === $response)
                throw new Exception(curl_error($curl), curl_errno($curl));
            $http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
            if (200 != $http_status)
                throw new Exception($response, $http_status);

            curl_close($curl);
        } catch(Exception $e) {
            trigger_error(sprintf(
                'Curl failed with error #%d: %s',
                $e->getCode(), $e->getMessage()),
                E_USER_ERROR);
        }

        return $response;
    }

    request();

?>