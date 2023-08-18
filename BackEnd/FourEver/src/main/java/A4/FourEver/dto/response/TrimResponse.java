package A4.FourEver.dto.response;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@ToString
public class TrimResponse {

    Long trimId;
    String name;
    int price;
    String mainImage;

    public static TrimResponse of(Long trimId, String name, int price, String mainImage) {
        return new TrimResponse(trimId, name, price, mainImage);
    }
}
