package fi.sample.equipments;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.InternalResourceView;

@RestController
public class ResourceViewEndpoint {
    private final Logger logger = LoggerFactory.getLogger(getClass());

    @GetMapping(value = "/init")
    public InternalResourceView loadFrontendApplication() {
        logger.info("loadFrontendApplication");
        return new InternalResourceView("/index.html", true);
    }
}
